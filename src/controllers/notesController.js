import notesService from "../services/notesService.js";

export const saveNote = async (req, res) => {
  const { title, body, date, photo_url } = req.body;
  const { id } = req.user;
  const note = await notesService.save({
    title,
    body,
    date,
    photo_url,
    userId: id,
  });
  res.status(201).json(note);
};

export const getNotes = async (req, res) => {
  const { id } = req.user;
  const notes = await notesService.get(id);
  res.status(200).json(notes);
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { title, body, date, photo_url } = req.body;
  const note = await notesService.update({
    id,
    title,
    body,
    date,
    photo_url,
    userId,
  });
  res.status(200).json(note);
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  await notesService.delete(id);
  res.status(200).json({ message: "Note deleted" });
};
