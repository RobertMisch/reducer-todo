import React, {useState, useReducer} from 'react'

initialState = {
    item:'',
    completed: false,
    id:new Date().getTime
}


const reducer = (state, action) => {
    // switch statement - simplified if/else if/ ... /else statement
    // if or else if blocks become "cases"
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          
        };
      case 'COMPLETE_TODO':
        return {
          ...state,
          
        };
      default:
        return state;
    }
  };

export default reducer