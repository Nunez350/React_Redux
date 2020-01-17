import * as ActionTypes from '../actions/ActionTypes'


const initialState = {
    todos:[]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {    
        case ActionTypes.FETCH_TODO_SUCCESS:          
            console.log(action.todos)
            return {
                ...state,
                todos: action.todos.data
                
            }
       
        case ActionTypes.ADD_TODO:
            console.log("add from reducer")
            return {
                ...state,
                todos: action.todos.data
                
            }


            case ActionTypes.DELETE_TODO:
            console.log("DELETE from reducer")
            return {
                ...state,
                todos: action.todos.data
                
            }
       default:
                return state;
            
    }
   
};


export default Reducer;

