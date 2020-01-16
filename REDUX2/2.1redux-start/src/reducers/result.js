import * as ActionTypes from '../store/actions/actionTypes'

const initialState = {
    results:[]
}

const result = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.STORE_RESULT:
            return {
                ...state, 
                results: state.results.concat({id: new Date(),  val: action.result})
            }
        case ActionTypes.DELETE_RESULT:            
          
                const newArray = state.results.filter(result => {
                    return result.id !== action.resultElId
                });

                console.log("onclick")
                 
                return {
                    ...state,
                    results:newArray

            }
            
        
        default:

    }
   return state;
};

export default result;

