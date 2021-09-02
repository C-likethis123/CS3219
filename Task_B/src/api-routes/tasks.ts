import express from 'express';

import taskController from '../controllers/tasks';
import taskSchemaValidator from '../validation/taskSchemaValidator';

const taskRouter = express.Router();
taskRouter.route('/:id')
  .get(taskController.getTask)
  .post(taskController.updateTask)
  .delete(taskController.deleteTask);

taskRouter.route('/')
  .get(taskController.getAllTasks)
  .post(
    taskSchemaValidator,
    taskController.createTask)
  .delete(taskController.deleteAll);

export default taskRouter;
