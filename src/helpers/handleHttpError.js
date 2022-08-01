const handleHttpError = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  console.log(status, message);
  res.status(status).json({ message });
};
export default handleHttpError;
