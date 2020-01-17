import * as ActionTypes from './ActionTypes';

export const fetchTodos = (data)=> {
    return {
        type:ActionTypes.FETCH_TODOS,
        data: data
    }
}


export const addTodos = (data)=> {
    return {
        type:ActionTypes.ADD_TODO,
        data: data
    }
}



export const deleteTodo = (id) => {
    return {
      type: ActionTypes.DELETE_TODO,
      id
    }
  }