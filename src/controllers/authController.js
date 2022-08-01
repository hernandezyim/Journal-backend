import { hashPassword } from "../helpers/bcrypt.js";
import { createToken, decodeToken } from "../helpers/jwt.js";
import { isValidPassword } from "../helpers/bcrypt.js";

import authService from "../services/authService.js";
import error from "../configs/error.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.isSignIn(email);

  if (!user || !(await isValidPassword(password, user.password)))
    error.unauthorized();

  const { id, name } = user;

  const token = createToken({ id, name });

  const refreshToken = createToken({ id, name, expiresIn: "7d" });

  const data = {
    id,
    name,
    token,
    refreshToken,
  };

  res.json(data);
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await authService.isSignIn(email);

  if (user) error.conflict();

  const hashedPassword = await hashPassword(password);

  const id = await authService.save({
    name,
    email,
    password: hashedPassword,
  });

  const token = createToken({ id, name });

  const refreshToken = createToken({ id, name, expiresIn: "7d" });

  const data = {
    id,
    name,
    token,
    refreshToken,
  };
  res.status(201).json(data);
};

export const refreshToken = async (req, res) => {
  const { id, name } = req.user;

  const newToken = createToken({
    id,
    name,
  });

  const data = {
    id,
    name,
    newToken,
  };

  res.json(data);
};

export const signInGoogle = async (req, res) => {
  const { credential } = req.body;

  const { name, email } = decodeToken(credential);

  const user = await authService.isSignIn(email);

  const id = user ? user.id : await authService.save({ name, email });

  const token = createToken({ id, name });

  const refreshToken = createToken({ id, name, expiresIn: "7d" });

  const data = {
    id,
    name,
    token,
    refreshToken,
  };

  res.json(data);
};
