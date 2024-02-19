import express from "express"
import connect from "./database/mongo.js"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import swaggerUi from "swagger-ui-express"
import fs from "fs"
import yaml from "js-yaml"
import {
  getAllTask,
  addTask,
  removeTask,
  toggleTask,
} from "./controllers/task-controller.js"

dotenv.config()
connect()

const app = express()

app.use(express.json())

app.use(cors())

const fileContents = fs.readFileSync("./src/swagger.yaml", "utf8")

const swaggerDocument = yaml.load(fileContents)

const options = {
  customSiteTitle: "ToDo APP - Swagger API",
}

app.use(
  express.static(path.join(new URL("../public", import.meta.url).pathname))
)

app.get("/api/getTasks", getAllTask)

app.post("/api/addTask", addTask)

app.patch("/api/toggleTask/:id", toggleTask)

app.delete("/api/deleteTask/:id", removeTask)

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))

app.listen(3000)
