import Task from "../models/Task.js";

export const addTask = async (req, res) => {
  const { todoTask, done } = req.body;

  const newTask = new Task({
    todoTask,
    done,
  });

  try {
    await newTask.save();
    return res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error adding task" });
  }
};
