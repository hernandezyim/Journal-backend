import db from "../configs/firebase.js";

const users = db.collection("users");

const save = async (user) => {
  const { name, email, password = "" } = user;

  const { id } = await users.add({
    name,
    email,
    password,
  });

  return id;
};

const isSignIn = async (email) => {
  const user = await users.where("email", "==", email).get();

  if (user.empty) return;

  const userData = {
    id: user.docs[0].id,
    ...user.docs[0].data(),
  };
  return userData;
};

export default { save, isSignIn };
