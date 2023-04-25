import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { getAllTask } from "./controllers/Task-controller.js";
import { addTask } from "./controllers/addTask-controller.js";
import { toggleTask } from "./controllers/doneTask-controller.js";
import { removeTask } from "./controllers/removeTask-controller.js";

dotenv.config();
connect();

const app = express();

app.use(express.json());

app.use(cors());

app.use(
  express.static(path.join(new URL("../public", import.meta.url).pathname))
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("src/public/index.html"));
});

app.get("/api/projects", getAllTask);

app.post("/api/projects", addTask);

app.patch("/api/projects/:id", toggleTask);

app.delete("/api/projects/:id", removeTask);

app.listen(3000);
