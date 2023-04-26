import Task from "../models/Task.js";
import { v4 as uuidv4 } from "uuid";

export const addTask = async (req, res) => {
  console.log(req.body);
  const { todoTask, done } = req.body;

  const newTask = new Task({
    todoTask,
    done,
    id: uuidv4(),
  });

  await newTask.save();
  console.log("Task added successfully");
  return res.status(201).json({ message: "Task added successfully" });
};
