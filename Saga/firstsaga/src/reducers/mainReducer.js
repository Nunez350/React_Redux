import * as actionTypes from '../actions/actionTypes'


const initialState = {
    counter: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {    
        case actionTypes.INCREMENT:
            let newCounter =  state.todos.concat([action.data])

            console.log("increment!")
            // console.log(state.todos)
            return {
                ...state,
                todos: newCounter
                
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