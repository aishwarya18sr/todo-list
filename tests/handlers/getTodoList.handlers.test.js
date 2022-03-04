const { getTodoListHandler } = require('../../src/handlers/getTodoList.handler');
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

describe.only('getTodoListHandler', () => {
  test('Get all lists', async () => {
    const getListMock = jest.spyOn(todoService, 'getTodoList').mockResolvedValue({ savedList });
    const res = mockResponse();
    await getTodoListHandler(null, res);
    expect(getListMock).toHaveBeenCalledWith();
    expect(res.json).toHaveBeenCalledWith({ toDoList: { savedList } });
    expect(res.json().status).toHaveBeenCalledWith(200);
  });
});
