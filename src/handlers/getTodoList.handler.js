const todoService = require('../services/dbOperations.service');

const getTodoListHandler = async (req, res) => {
  const toDoList = await todoService.getTodoList();
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  getTodoListHandler,
};
