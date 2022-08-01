import cloudinary from "../configs/cloudinary.js";

const fileUpload = async ({ file, body }, res, next) => {
  if (!file) body.photo_url ??= "";
  else {
    const { path } = file;
    const { url } = await cloudinary.uploader.upload(path, {
      folder: "journal",
    });
    body.photo_url = url;
  }
  next();
};

export default fileUpload;
