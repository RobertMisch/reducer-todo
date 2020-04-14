import React, {useReducer} from 'react';
import TodoList from './components/TodoList'
import './App.css';
import TodoForm from './components/TodoForm';
import {reducer, initialState} from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTodo= (item)=>{
    dispatch({type:'ADD_TODO', payload: item})
  }
  const toggleItems= (id)=>{
    dispatch({type:"TOGGLE_TODO", payload: id})
  }
  const clearCompleted= () =>{
    dispatch({type:"CLEAR_COMPLETED"})
  }
  return (
    <div className="App">
      <TodoForm 
        addTodo={addTodo}
        clearCompleted={clearCompleted}
      />
      <TodoList 
      todos={state.todos}
      toggleItems={toggleItems}/>
    </div>
  );
}

export default App;
