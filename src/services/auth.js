import { db } from "../configs/firebase.js";

const users = db.collection("users");

export const saveUser = async (user) => {
  const { name, email, password } = user;

  const { id } = await users.add({
    name,
    email,
    password,
  });

  return id;
};

export const deleteUser = async (user) => {
  const { id } = user;

  await users.doc(id).delete();
};

export const isSignIn = async (email) => {
  const user = await users.where("email", "==", email).get();

  if (user.empty) return;

  const userData = {
    id: user.docs[0].id,
    ...user.docs[0].data(),
  };
  return userData;
};
