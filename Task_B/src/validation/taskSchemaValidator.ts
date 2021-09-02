import { checkSchema } from "express-validator";
const taskSchemaValidator = checkSchema({
  title: {
    in: 'body',
    isLength: { options: {min: 1} },
    isString: true,
  },
  date: {
    in: 'body',
    optional: true,
    isInt: true,
  },
  description: {
    in: 'body',
    optional: true,
    isString: true,
  }
});

export default taskSchemaValidator;
