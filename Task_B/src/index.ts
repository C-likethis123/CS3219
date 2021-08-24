import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';

import taskRouter from './api-routes/tasks';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/tasks', taskRouter);

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
if (db) {
  console.log("mongodb database connected!")
}

app.listen(port, () => console.log("server started at localhost:8080"));
