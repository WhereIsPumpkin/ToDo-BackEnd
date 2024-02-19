import { Schema, model } from "mongoose"

const TaskSchema = new Schema({
  todoTask: {
    type: Schema.Types.String,
    required: true,
  },
  done: {
    type: Schema.Types.Boolean,
    required: true,
  },
  id: {
    type: Schema.Types.String,
  },
})

const Task = model("Task", TaskSchema)

export default Task
