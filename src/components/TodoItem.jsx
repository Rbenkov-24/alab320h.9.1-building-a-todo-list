/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/TodoItem.css';

//create a component for each todo item
const TodoItem = ({ todo, dispatch }) => {

  //state to check if we are editing
  const [isEditing, setIsEditing] = useState(false);
  //state to hold the new text when editing
  const [editedText, setEditedText] = useState(todo.text);

  return (
    <div className="todo-item">
{/* checkbox */}
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatch({ type: 'toggle_complete', payload: todo.id })}
      />
      {isEditing ? (

        //input for editing the todo text
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>
          {todo.text}
        </span>
      )}
      {isEditing ? (

  //button to save changes
        <button
          onClick={() => {
            dispatch({ type: 'edit_todo', payload: { id: todo.id, text: editedText } });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <>

    {/* editing button */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button
            onClick={() => dispatch({ type: 'delete_todo', payload: todo.id })}
            disabled={!todo.complete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;