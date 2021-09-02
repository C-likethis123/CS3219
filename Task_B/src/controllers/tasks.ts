import Task, {ITask} from '../models/tasks';

import {Request, Response, NextFunction} from 'express';

import {validationResult} from 'express-validator';
import TaskNotFoundException from '../exceptions/TaskNotFoundException';

type ControllerMethod = (req: Request, res: Response, next: NextFunction) => void;

const getTask: ControllerMethod = (req, res, next) => {
  Task.findById(req.params.id, (err: Error, task: ITask) => {
    if (task) {
      res.json({
        data: task,
      });
    } else {
      next(new TaskNotFoundException(req.params.id))
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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
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

const deleteTask: ControllerMethod = (req, res, next) => {
  Task.deleteOne({_id: req.params.id})
    .then(() => {
      res.json({
        data: req.params.id,
      })
    })
    .catch(() => {
      next(new TaskNotFoundException(req.params.id))
    })
}

const deleteAll: ControllerMethod = (req, res) => {
  Task.deleteMany({}, (err: Error) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Deleted everything!");
    }
  })
}

export default {getTask, updateTask, getAllTasks, createTask, deleteTask, deleteAll};
