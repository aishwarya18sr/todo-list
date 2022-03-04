const express = require('express');
const Joi = require('joi');
const validator = require('express-joi-validation');
const { getTodoTaskHandler } = require('../handlers/getTodoTask.handler');
const { createTodoTaskHandler } = require('../handlers/createTodoTask.handler');
const { updateTodoTaskHandler } = require('../handlers/updateTodoTask.handler');
const { deleteTodoTaskHandler } = require('../handlers/deleteTodoTask.handler');

const queryValidator = validator.createValidator({});
const querySchema = Joi.object({
  name: Joi.string().required(),
});

const todoTaskRouter = express.Router();
todoTaskRouter.get('/:id', getTodoTaskHandler);
todoTaskRouter.post('/:id', queryValidator.query(querySchema), createTodoTaskHandler);
todoTaskRouter.patch('/:id', queryValidator.query(querySchema), updateTodoTaskHandler);
todoTaskRouter.delete('/:id', deleteTodoTaskHandler);

module.exports = {
  todoTaskRouter, createTodoTaskHandler,
};
