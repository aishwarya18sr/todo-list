// const { getExpectedToDoList } = require('../../src/constants/resultToDo');
const { Tasks, Lists } = require('../../models');
const {
  dbGetTodoList, dbCreateTodoList, dbGetTodoTask, dbCreateTodoTask,
  dbGetTodoTaskById, dbUpdateTodoTask, dbDeleteTodoTask,
} = require('../../src/utils/dbOperations.utils');

describe('dbGetTodoList function', () => {
  test('should return all the lists', async () => {
    const expectedToDoList = [
      {
        id: 1,
        listName: 'Grocery Shopping',
        createdAt: '2022-03-03T07:21:40.429Z',
        updatedAt: '2022-03-03T07:21:40.429Z',
      },
      {
        id: 2,
        listName: 'Personal',
        createdAt: '2022-03-03T07:21:40.429Z',
        updatedAt: '2022-03-03T07:21:40.429Z',
      },
      {
        id: 6,
        listName: 'Work',
        createdAt: '2022-03-03T07:54:45.594Z',
        updatedAt: '2022-03-03T07:54:45.594Z',
      },
    ];
    const toDoMock = jest.spyOn(Lists, 'findAll').mockResolvedValue(expectedToDoList);
    const receivedToDoList = await dbGetTodoList();
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoList).toStrictEqual(expectedToDoList);
  });
  test('should return no records found if the lists table is empty', async () => {
    const toDoMock = jest.spyOn(Lists, 'findAll').mockResolvedValue([]);
    const receivedToDoList = await dbGetTodoList();
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoList).toStrictEqual('No records found');
  });
});

describe('dbCreateTodoList function', () => {
  test('should add the given list to the Lists table when proper string input is given', async () => {
    const toDoMock = jest.spyOn(Lists, 'create').mockResolvedValue({});
    await dbCreateTodoList('test list');
    expect(toDoMock).toHaveBeenCalled();
  });
  test('should throw error when empty string is given as input', async () => {
    try {
      await dbCreateTodoList('');
    } catch (err) {
      expect(err.message).toBe('Empty input is not accepted');
    }
  });
  test('should throw invalid input type when number is given as input', async () => {
    try {
      await dbCreateTodoList(5);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listName');
    }
  });
  test('should throw invalid input type when boolean is given as input', async () => {
    try {
      await dbCreateTodoList(false);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listName');
    }
  });
  test('should throw invalid input type when array is given as input', async () => {
    try {
      await dbCreateTodoList([5]);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listName');
    }
  });
  test('should throw invalid input type when object is given as input', async () => {
    try {
      await dbCreateTodoList({ a: 5 });
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listName');
    }
  });
});

describe('dbGetTodoTask function', () => {
  test('should return the tasks with given list id', async () => {
    const expectedToDoTask = [
      {
        id: 1,
        listName: 'Grocery Shopping',
        createdAt: '2022-03-03T07:21:40.429Z',
        updatedAt: '2022-03-03T07:21:40.429Z',
        Tasks: [
          {
            id: 1,
            name: 'Rice',
            ListId: 1,
            createdAt: '2022-03-03T07:21:40.436Z',
            updatedAt: '2022-03-03T07:21:40.436Z',
            list_id: 1,
          },
          {
            id: 3,
            name: 'Oil',
            ListId: 1,
            createdAt: '2022-03-03T10:50:32.143Z',
            updatedAt: '2022-03-03T10:50:32.143Z',
            list_id: 1,
          },
        ],
      },
    ];
    const toDoMock = jest.spyOn(Lists, 'findAll').mockResolvedValue(expectedToDoTask);
    const receivedToDoTask = await dbGetTodoTask('1');
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoTask).toStrictEqual(expectedToDoTask);
  });
  test('should return no records found if no task is found in the given list', async () => {
    const toDoMock = jest.spyOn(Lists, 'findAll').mockResolvedValue([]);
    const eceivedToDoTask = await dbGetTodoTask('15');
    expect(toDoMock).toHaveBeenCalled();
    expect(eceivedToDoTask).toStrictEqual('No records found');
  });
  test('should throw error when empty string is given as input', async () => {
    try {
      await dbGetTodoTask('');
    } catch (err) {
      expect(err.message).toBe('Empty input is not accepted');
    }
  });
  test('should throw invalid input type when boolean is given as input', async () => {
    try {
      await dbGetTodoTask(false);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listId');
    }
  });
  test('should throw invalid input type when array is given as input', async () => {
    try {
      await dbGetTodoTask([5]);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listId');
    }
  });
  test('should throw invalid input type when object is given as input', async () => {
    try {
      await dbGetTodoTask({ a: 5 });
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listId');
    }
  });
});

describe('dbGetTodoTaskById function', () => {
  test('should return the tasks with given task id for given list', async () => {
    const expectedToDoTask = [
      {
        id: 1,
        name: 'Rice',
        ListId: 1,
        createdAt: '2022-03-03T07:21:40.436Z',
        updatedAt: '2022-03-03T07:21:40.436Z',
        list_id: 1,
      },
    ];
    const toDoMock = jest.spyOn(Tasks, 'findAll').mockResolvedValue(expectedToDoTask);
    const receivedToDoTask = await dbGetTodoTaskById('1');
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoTask).toStrictEqual(expectedToDoTask);
  });
  test('should return no records found if the task with given id is not found', async () => {
    const toDoMock = jest.spyOn(Tasks, 'findAll').mockResolvedValue([]);
    const receivedToDoTask = await dbGetTodoTaskById('22');
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoTask).toStrictEqual('No records found');
  });
  test('should throw error when empty string is given as input', async () => {
    try {
      await dbGetTodoTaskById('');
    } catch (err) {
      expect(err.message).toBe('Empty input is not accepted');
    }
  });
  test('should throw invalid input type when boolean is given as input', async () => {
    try {
      await dbGetTodoTaskById(false);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
  test('should throw invalid input type when array is given as input', async () => {
    try {
      await dbGetTodoTaskById([5]);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
  test('should throw invalid input type when object is given as input', async () => {
    try {
      await dbGetTodoTaskById({ a: 5 });
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
});

describe('dbCreateTodoTask function', () => {
  test('should add the given task to the tasks table when proper string input is given', async () => {
    const toDoMock = jest.spyOn(Tasks, 'create').mockResolvedValue({});
    await dbCreateTodoTask('test task', '1');
    expect(toDoMock).toHaveBeenCalled();
  });
  test('should throw error when empty string is given as input', async () => {
    try {
      await dbCreateTodoTask('', '');
    } catch (err) {
      expect(err.message).toBe('Empty input is not accepted');
    }
  });
  test('should throw invalid input type when number is given as input for taskName', async () => {
    try {
      await dbCreateTodoTask(5, '1');
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskName');
    }
  });
  test('should throw invalid input type when boolean is given as input for taskName', async () => {
    try {
      await dbCreateTodoTask(false, '1');
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskName');
    }
  });
  test('should throw invalid input type when array is given as input for taskName', async () => {
    try {
      await dbCreateTodoTask([5], '1');
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskName');
    }
  });
  test('should throw invalid input type when object is given as input for taskName', async () => {
    try {
      await dbCreateTodoTask({ a: 5 }, '1');
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskName');
    }
  });
  test('should throw invalid input type when boolean is given as input for listId', async () => {
    try {
      await dbCreateTodoTask('Rice', true);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listId');
    }
  });
  test('should throw invalid input type when array is given as input for listId', async () => {
    try {
      await dbCreateTodoTask('Rice', [5]);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listId');
    }
  });
  test('should throw invalid input type when boolean is given as input for listId', async () => {
    try {
      await dbCreateTodoTask('Rice', { a: 5 });
    } catch (err) {
      expect(err.message).toBe('Invalid input type for listId');
    }
  });
});

describe('dbDeleteToTask function', () => {
  test('should delete the task with given taskId', async () => {
    const toDoMock = jest.spyOn(Tasks, 'destroy').mockResolvedValue({});
    await dbDeleteTodoTask('1');
    expect(toDoMock).toHaveBeenCalled();
  });
  test('should return error id taskId is not provided', async () => {
    try {
      await dbDeleteTodoTask('');
    } catch (err) {
      expect(err.message).toBe('Empty input is not accepted');
    }
  });
  test('should return invalid input id taskId is a boolean', async () => {
    try {
      await dbDeleteTodoTask(true);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
  test('should return invalid input id taskId is array', async () => {
    try {
      await dbDeleteTodoTask([2, 3]);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
  test('should return invalid input id taskId is float', async () => {
    try {
      await dbDeleteTodoTask(2.5);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
  test('should return invalid input id taskId is object', async () => {
    try {
      await dbDeleteTodoTask({ a: 3 });
    } catch (err) {
      expect(err.message).toBe('Invalid input type for taskId');
    }
  });
});
