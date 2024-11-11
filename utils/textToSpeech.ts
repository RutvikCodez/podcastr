export const textToSpeech = async (input: string, voice: string) => {
  try {
    const response = await fetch("/api/textToSpeech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input, voice }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate speech");
    }

    const data = await response.json();
    return data.audioUrl;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error generating or uploading audio.");
  }
};