import {checkSchema} from "express-validator";
const taskSchemaValidator = checkSchema({
  title: {
    in: 'body',
    isLength: {options: {min: 1}},
    isString: true,
    errorMessage: 'The title cannot be empty!',
  },
  date: {
    in: 'body',
    optional: true,
  },
  description: {
    in: 'body',
    optional: true,
    isString: true,
  },
  isCompleted: {
    in: 'body',
    optional: true,
    isBoolean: true,
  }
});

export default taskSchemaValidator;
