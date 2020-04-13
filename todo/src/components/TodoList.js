import React, {useReducer} from 'react'
import Todo from './Todo'
import {reducer, initialState} from '../reducers/reducer'

/*so we need:
-add todo
-toggle todo
-clear completed and all need state*/ 

const TodoList= () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
        {
            // console.log(state)
            state.todos.map(item => {
                return <Todo item={item}/>
            })
        }
        </div>
    )
}

export default TodoList