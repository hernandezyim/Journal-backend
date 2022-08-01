import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./firebase-keys.js";

console.log(
  process.env.FIREBASE_TYPE,
  "process.env.FIREBASE_TYPE",
  process.env.JWT_SECRET,
  "process.env.JWT_SECRET"
);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Database online");

export default getFirestore();
