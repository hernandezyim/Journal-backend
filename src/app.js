import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/router.js";

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
