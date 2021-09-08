import HttpException from './HttpException';

class ValidationException extends HttpException {
  constructor() {
    super(400, `This API was not called with the correct parameters`);
  }
}

export default ValidationException;
