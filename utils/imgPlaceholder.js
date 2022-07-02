import sharp from "sharp";

export default async function imgPlaceholder(path) {
  let image = await sharp("./public/images/" + path);
  let metadata = await image.metadata();
  let resizedImageBuf = await image.resize(64).toBuffer();

  return {
    base64: `data:image/jpg;base64,${resizedImageBuf.toString("base64")}`,
    width: metadata.width,
    height: metadata.height,
  };
}
