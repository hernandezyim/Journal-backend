import db from "../configs/firebase.js";

const notesRef = db.collection("notes");

const save = async (note) => {
  const noteRef = await notesRef.add(note);

  return {
    ...note,
    id: noteRef.id,
  };
};

const get = async (userId) => {
  const notes = await notesRef.where("userId", "==", userId).get();

  return notes.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};

const update = async (note) => {
  const noteRef = notesRef.doc(note.id);
  await noteRef.update(note);

  return {
    ...note,
    id: noteRef.id,
  };
};

const deleted = async (id) => await notesRef.doc(id).delete();

export default {
  save,
  get,
  update,
  delete: deleted,
};
