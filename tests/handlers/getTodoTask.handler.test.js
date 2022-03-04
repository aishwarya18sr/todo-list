const { getTodoTaskHandler } = require('../../src/handlers/getTodoTask.handler');
const todoService = require('../../src/services/dbOperations.service');

const savedTask = [
  {
    id: 2,
    name: 'Yoga',
    createdAt: '2022-03-03T07:21:40.429Z',
    updatedAt: '2022-03-03T07:21:40.429Z',
    list_id: 2,
  },
];

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe.only('getTodoTaskHandler', () => {
  const mockRequest = {
    params: {
      id: '2',
    },
  };
  test('Get all lists', async () => {
    const getTaskMock = jest.spyOn(todoService, 'getTodoTask').mockResolvedValue({ savedTask });
    const res = mockResponse();
    await getTodoTaskHandler(mockRequest, res);
    expect(getTaskMock).toHaveBeenCalledWith(mockRequest.params.id);
    expect(res.json).toHaveBeenCalledWith({ toDoTask: { savedTask } });
    expect(res.json().status).toHaveBeenCalledWith(200);
  });
});
