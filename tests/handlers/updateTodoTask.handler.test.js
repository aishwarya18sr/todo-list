const { updateTodoTaskHandler } = require('../../src/handlers/updateTodoTask.handler');
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

describe.only('updateTodoTaskHandler', () => {
  const mockRequest = {
    body: {
      name: 'Drawing',
    },
    params: {
      id: '2',
    },
  };
  test('update all lists', async () => {
    const updateTaskMock = jest.spyOn(todoService, 'updateTodoTask').mockResolvedValue({ savedTask });
    const res = mockResponse();
    await updateTodoTaskHandler(mockRequest, res);
    expect(updateTaskMock).toHaveBeenCalledWith(mockRequest.params.id, mockRequest.body.name);
    expect(res.json).toHaveBeenCalledWith({ toDoTask: { savedTask } });
    expect(res.json().status).toHaveBeenCalledWith(200);
  });
});
