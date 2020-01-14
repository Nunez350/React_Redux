import * as actionTypes from '../actions/actionTypes'


const initialState = {
    posts:[]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {    
        case actionTypes.ADD_POST:
            let newPosts =  state.posts.concat([action.data])

            console.log("added post!")
            return {
                ...state,
                posts: newPosts
                
            }
        case actionTypes.DELETE_POST:
            //return state.concat([action.text])
            console.log("lll")
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
                
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