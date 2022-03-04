const todoService = require('../services/dbOperations.service');

const updateTodoTaskHandler = async (req, res) => {
  const taskId = req.params.id;
  const taskName = req.body.name;
  const toDoTask = await todoService.updateTodoTask(taskId, taskName);
  res.json({
    toDoTask,
  }).status(200);
};

module.exports = {
  updateTodoTaskHandler,
};
