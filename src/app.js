import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import yaml from "js-yaml";
import { getAllTask } from "./controllers/Task-controller.js";
import { addTask } from "./controllers/addTask-controller.js";
import { toggleTask } from "./controllers/doneTask-controller.js";
import { removeTask } from "./controllers/removeTask-controller.js";

dotenv.config();
connect();

const app = express();

app.use(express.json());

app.use(cors());

const fileContents = fs.readFileSync("./src/swagger.yaml", "utf8");

const swaggerDocument = yaml.load(fileContents);

const options = {
  customSiteTitle: "ToDo APP - Swagger API",
};

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.use(
  express.static(path.join(new URL("../public", import.meta.url).pathname))
);

app.get("/api/projects", getAllTask);

app.post("/api/projects", addTask);

app.patch("/api/projects/:id", toggleTask);

app.delete("/api/projects/:id", removeTask);

app.listen(3000);
