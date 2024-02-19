import Task from "../models/Task.js"
import { v4 as uuidv4 } from "uuid"

export const getAllTask = async (req, res) => {
  const data = await Task.find()

  return res.status(200).json(data)
}

export const addTask = async (req, res) => {
  console.log(req.body)
  const { todoTask, done } = req.body

  const newTask = new Task({
    todoTask,
    done,
    id: uuidv4(),
  })

  await newTask.save()
  console.log("Task added successfully")
  return res.status(201).json({ message: "Task added successfully" })
}

export const removeTask = async (req, res) => {
  const taskId = req.params.id

  try {
    await Task.deleteOne({ id: taskId })
    return res.status(200).json({ message: "Task deleted successfully" })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error deleting task" })
  }
}

export const toggleTask = async (req, res) => {
  const { id } = req.params
  try {
    const task = await Task.findOne({ id })
    await Task.findOneAndUpdate({ id }, { done: !task.done })
    return res.status(201).json({ message: "Task updated successfully" })
  } catch (error) {
    console.log(error)
  }
}
