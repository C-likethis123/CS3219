import {Request, Response, NextFunction} from 'express';
import {ValidationError} from 'express-json-validator-middleware';

function validationErrorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }

  const isValidationError = err instanceof ValidationError;
  if (!isValidationError) {
    return next(err);
  }

  res.status(400).json({
    errors: err.validationErrors,
  });

  next();
}

export default validationErrorMiddleware;
