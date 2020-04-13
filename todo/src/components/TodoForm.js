import React from 'react'
import Todo from './Todo'

const submitHandler = (e)=>{

}

const changeHandler = (e) =>{
    newTodo = e.target.value
    return newTodo
}

const TodoForm= () => {
    return(
        <form onSubmit={submitHandler}>
            <input 
            type ='text' 
            id='' 
            name='newTodo' 
            value={newTodo} 
            onChange={changeHandler}>
            </input>
        </form>
    )
}

export default TodoForm