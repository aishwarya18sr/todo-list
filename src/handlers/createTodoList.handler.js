const { createTodoList } = require('../services/dbOperations.service');

const createTodoListHandler = async (req, res) => {
  const { name } = req.body;
  const toDoList = await createTodoList(name);
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  createTodoListHandler,
};
