import { useReducer } from 'react';
import TodoList from './components/TodoList'; 
import './styles/App.css';

const initialState = {
  todos: [
    { id: 1, text: 'Buy groceries', complete: false },
    { id: 2, text: 'Walk my dog', complete: false },
    { id: 3, text: 'Finish homework', complete: false },
  ],
};
//function to manage todos
function todoReducer(state, action) {
  switch (action.type) {
    case 'add_todo':
      return { 
        ...state, 
        todos: [{ id: Date.now(), text: action.payload, complete: false }, ...state.todos] 
      };
    case 'toggle_complete':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case 'edit_todo':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    case 'delete_todo':
      return { 
        ...state, 
        todos: state.todos.filter(todo => todo.id !== action.payload) 
      };
    default:
      return state; 
  }
}
// main App component 

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState); 

  return (
    <div className="App">
      <h1>Todo List</h1> 
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;