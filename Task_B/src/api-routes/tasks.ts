import express from 'express';

import taskController from '../controllers/tasks';

const taskRouter = express.Router();
taskRouter.route('/:id')
  .get(taskController.getTask)
  .post(taskController.updateTask)
  .delete(taskController.deleteTask);

taskRouter.route('/')
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

export default taskRouter;
