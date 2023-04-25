import Task from "../models/Task.js";

export const toggleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ id });
    await Task.findOneAndUpdate({ id }, { done: !task.done });
    return res.status(201).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
  }
};
