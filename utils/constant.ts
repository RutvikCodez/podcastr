import CustomInput from "@/components/custom/input";
import { magicField } from "./type";
import { z } from "zod";
import CustomSelect from "@/components/custom/select";
import CustomTextarea from "@/components/custom/textarea";

export const podcastData = [
  {
    id: 1,
    title: "The Joe Rogan Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
  },
  {
    id: 2,
    title: "The Futur",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
  },
  {
    id: 3,
    title: "Waveform",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
  },
  {
    id: 4,
    title: "The Tech Talks Daily Podcast",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
  },
  {
    id: 5,
    title: "GaryVee Audio Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
  },
  {
    id: 6,
    title: "Syntax ",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
  },
  {
    id: 7,
    title: "IMPAULSIVE",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
  },
  {
    id: 8,
    title: "Ted Tech",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
  },
];

export const voiceCategories = [
  "alloy",
  "shimmer",
  "nova",
  "echo",
  "fable",
  "onyx",
];

export const createPodcastData: magicField[] = [
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      name: "podcastTitle",
      type: "text",
      label: "Podcast Title",
      placeholder: "Pro Podcast",
      validation: z.string({
        required_error: "Podcast Title is required!",
      }),
      cns: {
        label: "font-bold text-white-1 text-3 leading-normal",
        input: "text-3 placeholder:text-3 bg-black-1 rounded-accent-1 placeholder:text-gray-1 border-none text-gray-1 focus-visible:ring-orange-1"
      }
    },
  },
  {
    type: "select",
    RenderComponent: CustomSelect,
    config: {
      name: "voiceType",
      label: "Voice Type",
      validation: z.string(),
      placeholder: "Select AI Voice",
      options: () => {
        return [
          { value: "alloy", label: "alloy" },
          { value: "shimmer", label: "shimmer" },
          { value: "nova", label: "nova" },
          { value: "echo", label: "echo" },
          { value: "fable", label: "fable" },
          { value: "onyx", label: "onyx" },
        ];
      },
      cns: {
        label: "font-bold text-white-1 text-3 leading-normal",
        input: "text-3 text-gray-1 w-full border-none bg-black-1 focus-visible:ring-orange-1",
      }
    },
  },
  {
    type: "textarea",
    RenderComponent: CustomTextarea,
    config: {
      name: "podcastDescription",
      label: "Podcast Description",
      placeholder: "Write a short podcast description",
      validation: z.string({
        required_error: "Podcast Description is required!",
      }),
      cols: 5,
      rows: 5,
      cns: {
        label: "font-bold text-white-1 text-3 leading-normal",
        input: "text-3 text-gray-1 w-full border-none bg-black-1 focus-visible:ring-orange-1",
      }
    },
  },
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      name: "prompt",
      type: "text",
      label: "AI Prompt to generate Podcast",
      placeholder: "Provide text to generate audio",
      validation: z.string({
        required_error: "AI Prompt is required!",
      }),
      cns: {
        label: "font-bold text-white-1 text-3 leading-normal",
        input: "text-3 text-gray-1 w-full border-none bg-black-1 focus-visible:ring-orange-1",
      }
    },
  },
];

export const createPodcastImageData: magicField[] = [
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      name: "aiImage",
      type: "text",
      label: "AI Prompt to generate Thumbnail",
      placeholder: "Provide text to generate thumbnail",
      validation: z.string().optional(),
      cns: {
        label: "font-bold text-white-1 text-3 leading-normal",
        input: "text-3 text-gray-1 w-full border-none bg-black-1 focus-visible:ring-offset-orange-1",
      }
    },
  },
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      name: "customImage",
      type: "file",
      label: "Upload Custom Image",
      placeholder: "Upload Custom Image",
      validation: z.string().optional(),
      cns: {
        label: "font-bold text-white-1 text-3 leading-normal",
        input: "text-3 text-gray-1 w-full border-none bg-black-1 focus-visible:ring-offset-orange-1",
      }
    },
  },
]
