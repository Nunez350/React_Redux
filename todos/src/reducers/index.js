
const initialState = {
    todos: []
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_TODOS_SUCCESS':
        console.log(action.todos)
        return {
          ...state,
          todos: action.todos.data
        }
        case 'TODO_CREATED':
          console.log("Todo is created");
          break;
        case 'SHOW_CONGRATULATION':
          console.log("COngratulations");
          break;
      default:
        return state;
    }
    return state;
  }
  

export default todosReducer;

