import { body } from "express-validator";
import handleValidationResult from "../../helpers/validationResult.js";

export const signUpValidator = [
  body("email").isEmail(),
  body("name").isLength({ min: 3 }),
  body("password").isLength({ min: 6 }),
  handleValidationResult,
];

export const signInValidator = [
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  handleValidationResult,
];
