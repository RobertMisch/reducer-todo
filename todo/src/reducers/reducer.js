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

export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
        return {
            ...state,
            todos: [...state.todos,
                {task:action.payload,
                completed:false,
                id:new Date().getTime,
            }
            ]
        };
        case 'COMPLETE_TODO':
        return {
            ...state,
            completed:true,
        };
        case 'CLEAR_COMPLETED':
            return{
                
            }
        case 'TOGGLE_COMPLETE':
            return{
                
            }
        default:
        return state;
    }
  };
