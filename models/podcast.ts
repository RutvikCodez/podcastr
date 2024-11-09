import { model, models, Schema } from "mongoose";

const podcastSchema = new Schema({
  creator: {
    type: String, 
    required: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  audioUrl: {
    type: String,
    required: [true, "Audio URL is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
  },
  voiceType: {
    type: String,
    required: [true, "Voice Type is required"],
    enum: {
      values: ["alloy", "shimmer", "nova", "echo", "fable", "onyx"],
    },
  },
  voicePrompt: {
    type: String,
    required: [true, "Voice Prompt is required"],
  },
  imagePrompt: {
    type: String,
    required: [true, "Image Prompt is required"],
  },
});

const Podcast = models.Podcast || model("Podcast", podcastSchema);
export default Podcast;