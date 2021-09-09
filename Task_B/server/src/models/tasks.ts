import {Schema, model, Model} from 'mongoose';

export interface ITask {
  title: string;
  date: Date;
  description: string;
}

const taskSchema: Schema<ITask> = new Schema({
  title: {type: String, required: true},
  date: {type: Date, default: new Date()},
  description: String,
  isCompleted: {type: Boolean, default: false},
});

taskSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    if (ret.date) {
      ret.date?.toLocaleDateString();
    }
    delete ret._id;
    delete ret.__v;
  }
});

const Task: Model<ITask> = model('Task', taskSchema);

export default Task;

