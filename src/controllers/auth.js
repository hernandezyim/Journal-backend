export function login(req, res) {
  const { username, password } = req.body;
  res.json({
    message: "login",
    user: {
      username,
      password,
    },
  });
}

export function register(req, res) {
  const { username, password } = req.body;
  res.json({
    message: "register",
    user: {
      username,
      password,
    },
  });
}
