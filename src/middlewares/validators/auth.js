import { check } from "express-validator";
import handleValidationResult from "../../helpers/validationResult.js";

export const signUpValidator = [
  check("email").isEmail(),
  check("password").isLength({ min: 6 }),
  check("name").isLength({ min: 3 }),
  handleValidationResult,
];

export const signInValidator = [
  check("email").isEmail(),
  check("password").isLength({ min: 6 }),
  handleValidationResult,
];
