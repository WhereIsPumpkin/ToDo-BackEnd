import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import { getAllTask } from "./controllers/Task-controller.js";
import { addTask } from "./controllers/addTask-controller.js";
import { removeTask } from "./controllers/removeTask-controller.js";

dotenv.config();
connect();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Test" });
});

app.get("/api/projects", getAllTask);

app.post("/api/projects", addTask);

app.delete("/api/projects/:id", removeTask);

app.listen(3000);
