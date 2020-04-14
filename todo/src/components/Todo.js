import React from 'react'
import {initialState, reducer} from '../reducers/reducer'



const Todo = (props)=>{
    console.log(props)
    return(
        <div
            className={`item${props.item.completed ? ' item-completed' : ''}`}
            onClick={() => props.toggleItems(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo 