const { Tasks, Lists } = require('../../models');

const dbGetTodoList = async () => {
  const requiredTodoList = await Lists.findAll();
  if (requiredTodoList.length === 0) {
    return 'No records found';
  }
  return requiredTodoList;
};

const dbCreateTodoList = async (givenName) => {
  if (givenName === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof givenName !== 'string') {
    throw new Error('Invalid input type for listName');
  }
  const result = await Lists.create({ listName: givenName });
  return result;
};

const dbGetTodoTask = async (listId) => {
  if (listId === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof listId !== 'string' && typeof listId !== 'number') {
    throw new Error('Invalid input type for listId');
  }
  const requiredTodoTask = await Lists.findAll({
    include: Tasks,
    where: {
      id: listId,
    },
  });
  if (requiredTodoTask.length === 0) {
    return 'No records found';
  }
  return requiredTodoTask;
};

const dbGetTodoTaskById = async (taskId) => {
  if (taskId === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof taskId !== 'string' && typeof taskId !== 'number') {
    throw new Error('Invalid input type for taskId');
  }
  const requiredTodoTask = await Tasks.findAll({
    where: {
      id: taskId,
    },
  });
  if (requiredTodoTask.length === 0) {
    return 'No records found';
  }
  return requiredTodoTask;
};

const dbCreateTodoTask = async (taskName, listId) => {
  if (taskName === '' || listId === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof taskName !== 'string' && typeof taskName !== 'number') {
    throw new Error('Invalid input type for taskName');
  } else if (typeof listId !== 'string' && typeof listId !== 'number') {
    throw new Error('Invalid input type for listId');
  }
  const result = await Tasks.create({ name: taskName, ListId: listId });
  return result;
};

const dbUpdateTodoTask = async (taskId, taskName) => {
  if (taskId === '') {
    throw new Error('Id has not been provided');
  } else if (typeof taskId !== 'string' && typeof taskId !== 'number') {
    throw new Error('Invalid input type');
  }
  const result = await Tasks.update({
    name: taskName,
  }, {
    where: {
      id: taskId,
    },
  });
  return result;
};

const dbDeleteTodoTask = async (taskId) => {
  if (taskId === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof taskId !== 'string' && typeof taskId !== 'number') {
    throw new Error('Invalid input type for taskId');
  }
  const result = await Tasks.destroy({
    where: {
      id: taskId,
    },
  });
  return result;
};

module.exports = {
  dbGetTodoList,
  dbCreateTodoList,
  dbGetTodoTask,
  dbCreateTodoTask,
  dbGetTodoTaskById,
  dbUpdateTodoTask,
  dbDeleteTodoTask,
};
