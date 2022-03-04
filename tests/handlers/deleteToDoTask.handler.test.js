const { deleteTodoTaskHandler } = require('../../src/handlers/deleteTodoTask.handler');
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

describe.only('deleteTodoTaskHandler', () => {
  const mockRequest = {
    params: {
      id: '2',
    },
  };
  test('delete all lists', async () => {
    const deleteTaskMock = jest.spyOn(todoService, 'deleteTodoTask').mockResolvedValue({ savedTask });
    const res = mockResponse();
    await deleteTodoTaskHandler(mockRequest, res);
    expect(deleteTaskMock).toHaveBeenCalledWith(mockRequest.params.id);
    expect(res.json).toHaveBeenCalledWith({ todoTask: { savedTask } });
    expect(res.json().status).toHaveBeenCalledWith(200);
  });
});
