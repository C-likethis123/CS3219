import express from 'express';

import tasks from '../tasks.json';

const taskRouter = express.Router();
taskRouter.get('/:id', (req, res) => {
  const filteredTasks = tasks.filter((task) => `${task.id}` === `${req.query.id}`);
  res.send(filteredTasks);
})
taskRouter.get('/', (req, res) => res.send(tasks));

taskRouter.post('/', (req, res) => {
  tasks.push()
})

taskRouter.delete('/', (req, res) => {
  res.send("Delete")
})

export default taskRouter;
