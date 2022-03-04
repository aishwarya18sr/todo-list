const todoService = require('../services/dbOperations.service');

const getTodoTaskHandler = async (req, res) => {
  const listId = req.params.id;
  const toDoTask = await todoService.getTodoTask(listId);
  res.json({
    toDoTask,
  }).status(200);
};

module.exports = {
  getTodoTaskHandler,
};
