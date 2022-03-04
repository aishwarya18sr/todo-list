const todoService = require('../services/dbOperations.service');

const deleteTodoTaskHandler = async (req, res) => {
  const taskId = req.params.id;
  const todoTask = await todoService.deleteTodoTask(taskId);
  res.json({
    todoTask,
  }).status(200);
};

module.exports = {
  deleteTodoTaskHandler,
};
