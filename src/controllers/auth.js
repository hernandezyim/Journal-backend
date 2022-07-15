import { hashPassword } from "../helpers/bcrypt.js";
import { createToken, verifyToken } from "../helpers/jwt.js";
import { isValidPassword } from "../helpers/bcrypt.js";
import { isSignIn, saveUser } from "../services/auth.js";
import newError from "../helpers/newError.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await isSignIn(email);

  if (!user || !(await isValidPassword(password, user.password))) {
    newError({ status: 401, message: "Email or password incorrect" });
  }

  const { id, name } = user;

  const token = createToken(id,name);

  const refreshToken = createToken({ id, name, expiresIn: "7d" });

  const data = {
    id,
    name,
    token,
    refreshToken,
  };

  return res.json(data);
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await isSignIn(email);

  if (user) {
    newError({
      status: 409,
      message: "Email already exists",
    });
  }

  const hashedPassword = await hashPassword(password);

  const id = await saveUser({ name, email, password: hashedPassword });

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

  return res.json(data);
};
