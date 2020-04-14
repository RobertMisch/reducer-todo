import React, {useReducer} from 'react'
import Todo from './Todo'
import {reducer, initialState} from '../reducers/reducer'

/*so we need:
-add todo
-toggle todo
-clear completed and all need state*/ 

const TodoList= (props) => {
    console.log(props.toggleItems)
    // const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
        {
            // console.log(state)
            props.todos.map(item => {
                return <Todo item={item} toggleItems={props.toggleItems}/>
            })
        }
        </div>
    )
}

export default TodoList