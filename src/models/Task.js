import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    todoTask: {
      type: Schema.Types.String,
      required: true,
    },
    done: {
      type: Schema.Types.Boolean,
      required: true,
    },
  },
  { versionKey: false }
);

const Task = model("Task", TaskSchema);

export default Task;
