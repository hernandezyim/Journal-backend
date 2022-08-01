import { PORT } from "./configs/keys.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import handleHttpError from "./helpers/handleHttpError.js";
import routes from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);

app.use(handleHttpError);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
