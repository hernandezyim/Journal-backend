import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import routes from "./routes/router.js";

config();

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
