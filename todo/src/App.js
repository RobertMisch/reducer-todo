import React from 'react';
import TodoList from './components/TodoList'
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
