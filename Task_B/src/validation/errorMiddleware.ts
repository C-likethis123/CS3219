import { Request, Response, NextFunction } from "express";

import HttpException from '../exceptions/HttpException';

const INTERNAL_SERVER_ERROR = 500;
const INTERNAL_ERROR_MSG = 'Something went wrong';

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = error.status || INTERNAL_SERVER_ERROR;
  const message = error.message || INTERNAL_ERROR_MSG;
  res
    .status(status)
    .json({ status, message });
}

export default errorMiddleware;