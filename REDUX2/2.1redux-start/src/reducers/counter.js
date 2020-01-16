
import * as ActionTypes from '../store/actions/actionTypes'

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        
        case ActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        
        case ActionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        
        case ActionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
       
            
        
        default:

    }
   return state;
};

export default counter;

