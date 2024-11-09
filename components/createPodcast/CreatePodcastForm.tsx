"use client";
import { ArrayToZodResolver } from "@/utils/ArrayToZodResolver";
import { createPodcastData, createPodcastImageData } from "@/utils/constant";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { TabDataType } from "@/utils/type";
import ReuseableTabs from "../custom/tabs";
import { getImageUrl } from "@/utils/getImageUrl";
import { textToSpeech } from "@/utils/textToSpeech";
import { useRouter } from "next/navigation";

const CreatePodcastForm = () => {
  const podcastData = [...createPodcastData, ...createPodcastImageData];
  const router = useRouter()
  const form = useForm({
    resolver: ArrayToZodResolver(podcastData),
  });
  const isSubmitting = form.formState.isSubmitting;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: any) => {
    try {
      const imageUrl = await getImageUrl(values.aiImage, values.podcastTitle);
      const audioUrl = await textToSpeech(values.prompt, values.voiceType);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/createPodcast`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            podcastTitle: values.podcastTitle,
            podcastDescription: values.podcastDescription,
            audioUrl: audioUrl,
            imageUrl: imageUrl,
            voiceType: values.voiceType,
            voicePrompt: values.prompt,
            imagePrompt: values.aiImage,
          }),
        }
      );
      const data = await response.json();
      console.log("Podcast created successfully:", data);
      router.push("/")
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const firstImageField = createPodcastImageData.at(0)!;
  const secondImageField = createPodcastImageData.at(1)!;

  const tabs: TabDataType[] = [
    {
      label: "Generate AI Image",
      value: "aiImage",
      content: (
        <div className="w-full">
          <firstImageField.RenderComponent
            control={form.control}
            {...firstImageField.config}
          />
        </div>
      ),
    },
    {
      label: "Upload Custom Image",
      value: "image",
      content: (
        <div className="w-full">
          <secondImageField.RenderComponent
            control={form.control}
            {...secondImageField.config}
          />
        </div>
      ),
    },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8"
      >
        {createPodcastData.map(({ RenderComponent, config }, index) => (
          <div key={index}>
            <RenderComponent control={form.control} {...config} />
          </div>
        ))}
        <ReuseableTabs tabs={tabs} />
        <Button
          type="submit"
          className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1"
          disabled={isSubmitting}
        >
          Submit & Publish Podcast
        </Button>
      </form>
    </Form>
  );
};

export default CreatePodcastForm;
