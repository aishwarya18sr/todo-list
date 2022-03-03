const express = require('express');
const { getTodoTaskHandler } = require('../handlers/getTodoTask.handler');
const { createTodoTaskHandler } = require('../handlers/createTodoTask.handler');
const { updateTodoTaskHandler } = require('../handlers/updateTodoTask.handler');
const { deleteTodoTaskHandler } = require('../handlers/deleteTodoTask.handler');

const todoTaskRouter = express.Router();
todoTaskRouter.get('/:id', getTodoTaskHandler);
todoTaskRouter.post('/:id', createTodoTaskHandler);
todoTaskRouter.patch('/:id', updateTodoTaskHandler);
todoTaskRouter.delete('/:id', deleteTodoTaskHandler);

module.exports = {
  todoTaskRouter, createTodoTaskHandler,
};
