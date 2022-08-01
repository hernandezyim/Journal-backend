import multer from "multer";
const upload = () => {
  //  save in folder temporary for upload to cloudinary
  const storage = multer.diskStorage({});

  const upload = multer({ storage });

  return upload.single("file");
};
export default upload;
