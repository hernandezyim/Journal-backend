import { validationResult } from "express-validator";
import newError from "./newError.js";

const handleValidationResult = (req, res, next) => {
  if (validationResult(req).isEmpty()) return next();

  const errors = validationResult(req).mapped();
  console.log(errors);
  newError({ status: 400, message: "Invalid data", errors });
};
export default handleValidationResult;
