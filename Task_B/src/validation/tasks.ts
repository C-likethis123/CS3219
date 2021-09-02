const taskSchema = {
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string",
      minLength: 1,
    },
    date: {
      type: "integer",
    },
    description: {
      type: "string",
    }
  }
}

export default {taskSchema};
