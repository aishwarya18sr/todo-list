const {
  Tasks, Lists, UsersLists,
} = require('../../models');

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
  const requiredTodoTask = await Tasks.findAll({
    include: {
      model: Lists,
    },
    attributes: ['id', 'name'],
    where: {
      ListId: listId,
    },
    order: ['id'],
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
  if (taskId === '' || taskName === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof taskId !== 'string' && typeof taskId !== 'number') {
    throw new Error('Invalid input type for taskId');
  } else if (typeof taskName !== 'string' && typeof taskName !== 'number') {
    throw new Error('Invalid input type for taskName');
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

// const dbGetUserTodo = async (userId) => {
//   if (userId === '') {
//     throw new Error('Empty input is not accepted');
//   } else if (typeof userId !== 'string' && typeof userId !== 'number') {
//     throw new Error('Invalid input type for userId');
//   }
//   const requiredList = await UsersLists.findAll({
//     where: {
//       userId,
//     },
//   });
//   let listId;
//   const requiredTodoTaskList = [];
//   console.log(requiredList);
//   for (const [, value] of Object.entries(requiredList)) {
//     listId = value.dataValues.listId;
//     const todo = await dbGetTodoTask(listId);
//     requiredTodoTaskList.push(todo);
//   }
//   return requiredTodoTaskList;
// };

const dbCreateUserList = async (userId, listId) => {
  if (userId === '' || listId === '') {
    throw new Error('Empty input is not accepted');
  } else if (typeof userId !== 'string' && typeof userId !== 'number') {
    throw new Error('Invalid input type for taskName');
  } else if (typeof listId !== 'string' && typeof listId !== 'number') {
    throw new Error('Invalid input type for listId');
  }
  const result = await UsersLists.create({ userId, listId });
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
  dbCreateUserList,
};
