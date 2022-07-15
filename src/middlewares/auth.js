import { verifyToken } from "../helpers/jwt.js";
import newError from "../helpers/newError.js";

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  const payload = verifyToken(token);

  if (!payload) {
    newError({ status: 401, message: "Invalid token" });
  }

  console.log(payload);
  req.user = payload;
  next();
};

export default checkAuth;
