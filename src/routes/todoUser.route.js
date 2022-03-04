const express = require('express');
const { getUserTodoHandler } = require('../handlers/getUserTodo.handler');
const { createUserListHandler } = require('../handlers/createUserList.handler');

const todoUserRouter = express.Router();
todoUserRouter.get('/:id', getUserTodoHandler);
todoUserRouter.post('/:id', createUserListHandler);

module.exports = {
  todoUserRouter,
};
