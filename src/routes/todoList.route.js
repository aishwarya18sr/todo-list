const express = require('express');
const Joi = require('joi');
const validator = require('express-joi-validation');
const { getTodoListHandler } = require('../handlers/getTodoList.handler');
const { createTodoListHandler } = require('../handlers/createTodoList.handler');

const queryValidator = validator.createValidator({});
const querySchema = Joi.object({
  name: Joi.string().required(),
});

const todoListRouter = express.Router();
todoListRouter.get('/', getTodoListHandler);
todoListRouter.post('/', queryValidator.query(querySchema), createTodoListHandler);

module.exports = {
  todoListRouter,
};
