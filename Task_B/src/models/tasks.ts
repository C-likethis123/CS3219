import {Schema, model, Model} from 'mongoose';

export interface ITask {
  title: string;
  date: Date;
  description: string;
}

const taskSchema: Schema<ITask> = new Schema({
  title: {type: String, required: true},
  date: {type: Number, default: new Date().valueOf()},
  description: String,
});

const Task: Model<ITask> = model('Task', taskSchema);

export default Task;

