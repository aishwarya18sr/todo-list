const { getTodoList } = require('../services/dbOperations.service');

const getTodoListHandler = async (req, res) => {
  const toDoList = await getTodoList();
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  getTodoListHandler,
};
