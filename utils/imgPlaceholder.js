import sharp from "sharp";

export default async function imgPlaceholder(path) {
  let resizedImageBuf = await sharp("./public/images/" + path)
    .resize(64)
    .toBuffer();

  return `data:image/jpg;base64,${resizedImageBuf.toString("base64")}`;
}
