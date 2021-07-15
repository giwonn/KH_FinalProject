import ApiService from "./.apiservice";
const TodoService = () => {};

TodoService.insertMyTodo = (data, email) => {
  return ApiService.postWithHeader("/mytodo.do", data, email);
};

TodoService.getMyTodos = (email) => {
  return ApiService.getWithHeader("/mytodo.do", email);
};

TodoService.deleteMyTodo = (id) => {
  return ApiService.delete(`/mytodo.do?id=${id}`);
};

TodoService.updateMyTodo = (data, email) => {
  return ApiService.putWithHeader("/mytodo.do", data, email);
};

TodoService.toggleTodo = (data) => {
  return ApiService.patch(`/mytodo.do`,data);
};
export default TodoService;
