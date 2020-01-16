// const initialState = {
//     counter: 0,
//     results:[]
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {

//         case 'INCREMENT':
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
        
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
        
//         case 'ADD':
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
        
//         case 'SUBTRACT':
//             return {
//                 ...state,
//                 counter: state.counter - action.payload
//             }
//         case 'STORE_RESULT':
//             return {
//                 ...state, 
//                 results: state.results.concat({id: new Date(),  val: state.counter})
//             }
//         case 'DELETE_ID':            
          
//                 const newArray = state.results.filter(result => {
//                     return result.id !== action.id
//                 });

//                 console.log("onclick")
                 
//                 return {
//                     ...state,
//                     results:newArray

//             }
            
        
//         default:

//     }
//    return state;
// };

// export default reducer;

