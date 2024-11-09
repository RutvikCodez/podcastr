import ImageKit from "imagekit";

const imagekit = new ImageKit({
  privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY || "",
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
});

export const getImageUrl = async (
  file: string | undefined,
  filename: string
) => {
  if (file === undefined) {
    return "";
  }
  if (file) {
    file = file.split(",")[1];
    const uploadResponse = await imagekit.upload({
      file: file,
      fileName: filename,
    });
    const imageUrl = uploadResponse.url;
    return imageUrl;
  }
  return "";
};
