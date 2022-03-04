const { createTodoListHandler } = require('../../src/handlers/createTodoList.handler');
const todoService = require('../../src/services/dbOperations.service');

const savedList = [
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

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe.only('createTodoListHandler', () => {
  const mockRequest = {
    body: {
      name: 'test list',
    },
  };
  test('Get all lists', async () => {
    const createListMock = jest.spyOn(todoService, 'createTodoList').mockResolvedValue({ savedList });
    const res = mockResponse();
    await createTodoListHandler(mockRequest, res);
    expect(createListMock).toHaveBeenCalledWith(mockRequest.body.name);
    expect(res.json).toHaveBeenCalledWith({ toDoList: { savedList } });
    expect(res.json().status).toHaveBeenCalledWith(200);
  });
});
