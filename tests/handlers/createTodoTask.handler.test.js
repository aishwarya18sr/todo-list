const { createTodoTaskHandler } = require('../../src/handlers/createTodoTask.handler');
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

describe.only('createTodoTaskHandler', () => {
  const mockRequest = {
    body: {
      name: 'test task',
    },
    params: {
      id: '1',
    },
  };
  test('Get all lists', async () => {
    const createTaskMock = jest.spyOn(todoService, 'createTodoTask').mockResolvedValue({ savedTask });
    const res = mockResponse();
    await createTodoTaskHandler(mockRequest, res);
    expect(createTaskMock).toHaveBeenCalledWith(mockRequest.body.name, mockRequest.params.id);
    expect(res.json).toHaveBeenCalledWith({ toDoTask: { savedTask } });
    expect(res.json().status).toHaveBeenCalledWith(200);
  });
});
