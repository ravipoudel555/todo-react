import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddTodoAction, RemoveTodoAction} from "./actions/TodoAction";
import "./App.css";
import ProductListComponent from "./layouts/ProductListComponent";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const {todos} = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const handleRemoveTodo = (e, todo) => {
    dispatch(RemoveTodoAction(todo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App</h2>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a todo here..."
          style={{width: 350, padding: 10, borderRadius: 10, marginTop: 10}}
          onChange={(e) => setTodo(e.target.value)}
        ></input>

        <button
          type="submit"
          style={{padding: 10, borderRadius: 200, marginLeft: 10}}
        >
          Add
        </button>
      </form>

      <ul style={{listStyleType: "none"}}>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <span>
                <button
                  style={{
                    backgroundColor: "red",
                    padding: 5,
                    borderRadius: 5,
                    color: "white",
                    border: "none",
                    marginLeft: 4,
                  }}
                  onClick={(e) => handleRemoveTodo(e, todo)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>

      <ProductListComponent />
    </div>
  );
}

export default App;
