export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: {todos},
  } = getState();

  const isTodoAlreadyPresent = todos.find((i) => i.todo === todo);

  if (!isTodoAlreadyPresent) {
    dispatch({type: "ADD_TODO", payload: [{id: todo, todo}, ...todos]});
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  console.log(todo.id);

  const {
    Todo: {todos},
  } = getState();

  dispatch({
    type: "DELETE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
