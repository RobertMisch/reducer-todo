import React, {useState, useReducer} from 'react'
import Todo from './Todo'
import {initialState, reducer} from '../reducers/reducer'

const TodoForm= (props) => {

    const [newTodo, setNewTodo] = useState();

    const submitHandler = (e)=>{
        e.preventDefault()
        props.addTodo(newTodo)
        setNewTodo('')
    }

    const changeHandler = (e) =>{
        setNewTodo(e.target.value)
    }
    return(
        <form onSubmit={submitHandler}>
            <input 
            type ='text' 
            name='newTodo' 
            value={newTodo} 
            onChange={changeHandler}>
            </input>
            <button type='submit'>add</button>
            <button onClick={()=>{props.clearCompleted()}}>clear completed</button>
        </form>
    )
}

export default TodoForm