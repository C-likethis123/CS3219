import express from 'express';

import taskController from '../controllers/tasks';

const taskRouter = express.Router();
taskRouter.route('/:id')
  .get(taskController.getTask);
  post(taskController.updateTask);

taskRouter.get('/', taskController.getAllTasks);

taskRouter.post('/', taskController.createTask);

taskRouter.delete('/', taskController.deleteTask);

export default taskRouter;
