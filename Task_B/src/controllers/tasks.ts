import Task, {ITask} from '../models/tasks';

import {Request, Response} from 'express';

type ControllerMethod = (req: Request, res: Response) => void;

const getTask: ControllerMethod = (req, res) => {
  Task.findById(req.params.id, (err: Error, task: ITask) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: task,
      });
    }
  });
};

const getAllTasks: ControllerMethod = (req, res) => {
  Task.find({}, (err: Error, tasks: ITask[]) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: tasks,
      })
    }
  })
}

const createTask: ControllerMethod = (req, res) => {
  const { title, date, description } = req.body;
  Task.create({ title, date, description }, (err: Error, task: ITask) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: task,
      })
    }
  })
}

const updateTask: ControllerMethod = (req, res) => {
  const { id } = req.params;
  const { title, date, description } = req.body;
  Task.findOneAndUpdate({ _id: id }, { title, date, description }, { new: true }, (err: Error, task: ITask) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: task,
      })
    }
  })
}

const deleteTask: ControllerMethod = (req, res) => {
  Task.deleteOne({_id: req.params.id}, (err: Error) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: req.params.id,
      })
    }
  })
}

export default {getTask, updateTask, getAllTasks, createTask, deleteTask};
