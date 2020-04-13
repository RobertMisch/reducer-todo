import React from 'react';
import TodoList from './components/TodoList'
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
