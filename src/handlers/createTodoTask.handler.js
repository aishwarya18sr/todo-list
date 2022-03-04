const todoService = require('../services/dbOperations.service');

const createTodoTaskHandler = async (req, res) => {
  const taskName = req.body.name;
  const listId = req.params.id;
  const toDoTask = await todoService.createTodoTask(taskName, listId);
  res.json({
    toDoTask,
  }).status(200);
};

module.exports = {
  createTodoTaskHandler,
};
