import React, {useState, useReducer} from 'react'
// import Todo from '../components/Todo'

export const initialState = {
    todos:[
    {
        task:'filler',
        completed: false,
        id:new Date().getTime()
    }
]}

/*so we need:
-add todo
-toggle todo
-clear completed and all need state*/ 

// className={`item${props.item.completed ? ' completed' : ''}`}
        // onClick={() => props.toggleItem(props.item.id)}

export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
        return {
            ...state,
            todos: [...state.todos,
                {task:action.payload,
                completed:false,
                id: new Date().getTime()
                // id: Math.floor((Math.random() * 1000) + 1),
            }
            ]
        };
        case 'TOGGLE_TODO':
        return {
            ...state,
            todos: state.todos.map(item =>{
                if(action.payload === item.id){
                    return{
                        ...item, completed: !item.completed
                    }
                }
                return item;
            })
        };
        case 'CLEAR_COMPLETED':
            return{
                todos: state.todos.filter(item => !item.completed)
            }
        default:
        return state;
    }
  };
