import { validationResult } from "express-validator";
import error from "../configs/error.js";

const handleValidationResult = (req, res, next) => {
  if (validationResult(req).isEmpty()) return next();

  error.badRequest();
};
export default handleValidationResult;
