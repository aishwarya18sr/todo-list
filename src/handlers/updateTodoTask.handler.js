const { updateTodoTask } = require('../services/dbOperations.service');

const updateTodoTaskHandler = async (req, res) => {
  const taskId = req.params.id;
  const taskName = req.body.name;
  const toDoTask = await updateTodoTask(taskId, taskName);
  res.json({
    toDoTask,
  }).status(200);
};

module.exports = {
  updateTodoTaskHandler,
};
