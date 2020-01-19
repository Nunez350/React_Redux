import * as ActionTypes from '../actions/actionTypes'

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.INCREMENT:
          return {
              ...state,
              counter: state.counter + 1
          }
        case ActionTypes.INCREMENT_IF_ODD:
            return {
                ...state,
                counter: (state.counter % 2 !== 0) ? state.counter + 1 : state.counter
            }
         
        case ActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        
        default:
          return state
      }
}
export default counterReducer;

