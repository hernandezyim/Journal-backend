const handleHttpError = (err, res) => {
  const status = err.status || 500;
  console.log("aaa");
  const message = err.message || "Something went wrong";
  res.status(status).json({
    message,
    errors: err.errors,
  });
};
export default handleHttpError;
