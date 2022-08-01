import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs/keys.js";

export const createToken = (optionsCreateToken) => {
  const { id, name, expiresIn = "2h" } = optionsCreateToken;
  const payload = {
    id,
    name,
  };

  const options = {
    expiresIn,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {}
};

export const decodeToken = (token) => jwt.decode(token);
