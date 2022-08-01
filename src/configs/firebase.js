import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./firebase-keys.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Database online");

export default getFirestore();
