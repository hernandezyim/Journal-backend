import { verifyToken } from "../helpers/jwt.js";

const checkAuth = (req, res, next) => {
  const token = req.headers["x-access-token"]?.split(" ")[1];

  const payload = verifyToken(token);

  if (!payload) return res.status(401).json({ message: "Unauthorized" });

  req.user = payload;
  next();
};

export default checkAuth;
