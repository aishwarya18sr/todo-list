const todoService = require('../services/dbOperations.service');

const createUserListHandler = async (req, res) => {
  const { listId } = req.body;
  const userId = req.params.id;
  const todoUserList = await todoService.createUserList(userId, listId);
  res.json({
    todoUserList,
  }).status(200);
};

module.exports = {
  createUserListHandler,
};
