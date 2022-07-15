const newError = ({  status,message }) => {
    const err = new Error(message);
    err.status = status;
  throw err;
};

export default newError;