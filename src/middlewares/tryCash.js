import handleHttpError from "../helpers/handleHttpError.js";

const tryCash = (action) => async (req, res, next) => {
  try {
    await action(req, res, next);
  } catch (err) {
    console.log(err);
     handleHttpError(err,res);
  }
};

export default tryCash;
