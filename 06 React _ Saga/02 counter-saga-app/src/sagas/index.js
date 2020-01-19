/* eslint-disable no-constant-condition */

import { put, takeEvery, delay } from 'redux-saga/effects'
import * as ActionTypes from '../actions'

export function* incrementAsync() {
  console.log("hello");
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}
export default function* rootSaga() {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync)
}
