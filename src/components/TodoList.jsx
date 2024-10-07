/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoItem from './TodoItem'; 
import '../styles/TodoList.css';

//create a component for the todo list
const TodoList = ({ todos, dispatch }) => {
//state to hold the new todo text
  const [newTodo, setNewTodo] = useState(''); 

  //function to add a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      dispatch({ type: 'add_todo', payload: newTodo }); 
      setNewTodo(''); 
    }
  };

  return (
    <div className="todo-list-container">
      <form onSubmit={handleAddTodo}>
        {/* input field to enter new todo */}
        <input
          type="text"
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add new todo"
        />
        {/* submit button for the new todo */}
        <button type="submit">Add Todo</button>
      </form>
    
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} /> 
      ))}
    </div>
  );
};

export default TodoList;