import React from 'react'
import {initialState, reducer} from '../reducers/reducer'



const Todo = (props)=>{
    console.log(props)
    return(
        <div>
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo 