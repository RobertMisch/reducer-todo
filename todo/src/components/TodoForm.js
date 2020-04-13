import React, {useState, useReducer} from 'react'
import Todo from './Todo'
import {initialState, reducer} from '../reducers/reducer'

const TodoForm= () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState();

    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log(newTodo)
        // console.log(state)
        dispatch({type:'ADD_TODO', payload: newTodo})
        // console.log(state)
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
            <button onClick={()=>{dispatch({type:'CLEAR_COMPLETED'})}}>clear completed</button>
        </form>
    )
}

export default TodoForm