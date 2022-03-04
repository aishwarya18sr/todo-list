const todoService = require('../services/dbOperations.service');

const getUserTodoHandler = async (req, res) => {
  const userId = req.params.id;
  const toDoTaskList = await todoService.getUserTodo(userId);
  res.json({
    toDoTaskList,
  }).status(200);
};

module.exports = {
  getUserTodoHandler,
};
