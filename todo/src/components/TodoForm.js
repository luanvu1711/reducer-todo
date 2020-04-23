import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducer/useReducer';
import Todo from './Todo';


function TodoForm(props) {
    
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const [todoText, setTodoText] = useState('');


    const handleChanges = e => {
        setTodoText(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: todoText});
        setTodoText('');
    }

    const toggleTodo = todoId => {   
        dispatch({type: 'TOGGLE_ITEM', payload: todoId})
      };

      const clearDone = e => {
        e.preventDefault();    
        dispatch({type: 'CLEAR_COMPLETED'})
      };


    return(
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    name="toDo"
                    value={todoText}
                    onChange={handleChanges}
                />
                <button>Add Something To Do</button>
            </form>
            <Todo todo={state.todoItems} toggle={toggleTodo} clear={clearDone} />
        </div>
    )

}

export default TodoForm;

