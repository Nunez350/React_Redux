const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//actions
let INC_COUNTER = 'INC_COUNTER';
let ADD_COUNTER = 'ADD_COUNTER';

//action creators
function inc(){
    return { type: INC_COUNTER}
}

function add(x) {
    return {type: ADD_COUNTER, value: x}
};



// Reducer
rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Actions
store.dispatch(inc());
store.dispatch(add(10));


// store.dispatch({type: 'INC_COUNTER'});
// store.dispatch({type: 'ADD_COUNTER', value: 10});
// console.log(store.getState());
