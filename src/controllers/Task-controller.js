import Task from "../models/Task.js";

export const getAllTask = async (req, res) => {
  const data = await Task.find();

  return res.status(200).json(data);
};
