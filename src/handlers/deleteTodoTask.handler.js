const { deleteTodoTask } = require('../services/dbOperations.service');

const deleteTodoTaskHandler = async (req, res) => {
  const taskId = req.params.id;
  const todoTask = await deleteTodoTask(taskId);
  res.json({
    todoTask,
  }).status(200);
};

module.exports = {
  deleteTodoTaskHandler,
};
