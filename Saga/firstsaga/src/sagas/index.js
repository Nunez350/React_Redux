import {put, takeEvery, delay } from 'redux-saga/effects'
import * as ActionTypes from '../action/index';


export function* incrementAsync() {
    console.log("hhelo")
    yield delay(1000)
    yield put({type: 'INCREMENT'})
}
export default function* rootSaga() {
    yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync)
}




const mapDispatchToProps = dipatch => {
    return {
        onIncrementCounter: () => dipatch({type: ActionTypes.INCREMENT})
    
    }
};

export default connect(mapStateToProps, mapDipatchToProps)(Counter)