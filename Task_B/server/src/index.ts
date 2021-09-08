import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';

import cors from 'cors';

import taskRouter from './api-routes/tasks';
import errorMiddleware from './validation/errorMiddleware';

const app = express();
const port = 8080;

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/tasks', taskRouter);
app.use(errorMiddleware);

mongoose.connect('mongodb://mongo:27017', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
if (db) {
  console.log("mongodb database connected!")
}

app.listen(port, () => console.log("server started at localhost:8080"));