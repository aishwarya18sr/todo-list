const express = require('express');
const { getTodoListHandler } = require('../handlers/getTodoList.handler');
const { createTodoListHandler } = require('../handlers/createTodoList.handler');

const todoListRouter = express.Router();
todoListRouter.get('/', getTodoListHandler);
todoListRouter.post('/', createTodoListHandler);

module.exports = {
  todoListRouter,
};
