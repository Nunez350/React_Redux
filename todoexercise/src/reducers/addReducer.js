import * as actionTypes from '../actions/actionTypes'


const initialState = {
    todos:[]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {    
        case actionTypes.ADD_TODO:
            let newPosts =  state.todos.concat([action.data])

            console.log("added todo!")
            // console.log(state.todos)
            return {
                ...state,
                todos: newPosts
                
            }
        case actionTypes.DELETE_TODO:
            //return state.concat([action.text])
            console.log("lll")
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id)
                
            }
       
       default:
                return state
            
    }
   
};


export default Reducer;



// return state;
// return state.concat([action.text])
// default:
//   return state
// }
// }


 //    case 'STORE_RESULT':
    //         return {
    //             ...state, 
    //             // results: state.results.concat({id: new Date(),  val: state.counter})
    //         }
       //default