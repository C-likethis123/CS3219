import express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import taskRouter from './api-routes/tasks';

const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World"));


app.use('/api/tasks', taskRouter);

app.listen(port, () => console.log("server started at localhost:8080"));
