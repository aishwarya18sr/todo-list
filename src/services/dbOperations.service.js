const {
  dbGetTodoList, dbCreateTodoList, dbGetTodoTask,
  dbCreateTodoTask, dbGetTodoTaskById, dbUpdateTodoTask, dbDeleteTodoTask,
} = require('../utils/dbOperations.utils');

const getTodoList = async () => {
  const todoList = await dbGetTodoList();
  return todoList;
};

const createTodoList = async (givenName) => {
  await dbCreateTodoList(givenName);
  const todoList = await dbGetTodoList();
  return todoList;
};

const getTodoTask = async (listId) => {
  const todoTask = await dbGetTodoTask(listId);
  return todoTask;
};

const getTodoTaskById = async (taskId) => {
  const todoTask = await dbGetTodoTaskById(taskId);
  return todoTask;
};

const createTodoTask = async (taskName, listId) => {
  await dbCreateTodoTask(taskName, listId);
  const todoTask = await dbGetTodoTask(listId);
  return todoTask;
};

const updateTodoTask = async (taskId, taskName) => {
  await dbUpdateTodoTask(taskId, taskName);
  const todoTask = await dbGetTodoTask(taskId);
  return todoTask;
};

const deleteTodoTask = async (taskId) => {
  await dbDeleteTodoTask(taskId);
  const todoTask = await dbGetTodoTask(taskId);
  return todoTask;
};

module.exports = {
  getTodoList,
  createTodoList,
  getTodoTask,
  createTodoTask,
  getTodoTaskById,
  updateTodoTask,
  deleteTodoTask,
};
