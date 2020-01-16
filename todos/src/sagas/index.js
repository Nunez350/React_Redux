import axios from 'axios';
import { call, put, takeEvery, all , take} from 'redux-saga/effects';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=edgar1234';

export function* fetchTodos() {
  try {
    //console.log("Its fetching...")
    const todos = yield call(axios.get, `${ROOT_URL}/posts${API_KEY}`);
    yield put({ type: 'FETCH_TODOS_SUCCESS', todos})
  } catch (error) {
    console.log('fetchTodos error:', error.message)
  }
}

function* watchFetchTodos() {
  yield takeEvery('FETCH_TODOS', fetchTodos)
}



 function* createTodo(action) {
  const newTodo = { title: '', categories: '', content: action.payload };
  try {
    yield call(axios.post, `${ROOT_URL}/posts${API_KEY}`, newTodo);
   
    yield put({type:'FETCH_TODOS'});
    yield put({type:"TODO_CREATED"})
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

function * watchAddToDo() {
  yield takeEvery('ADD_TODO', createTodo)
}

 function* deleteTodo({id}) {
  try {
    yield call(axios.delete, `${ROOT_URL}/posts/${id}${API_KEY}`);
    yield put({type: 'FETCH_TODOS'})
  } catch (error) {
    console.log('deleteTodo Error:', error.message);
  }
}


function* watchDeleteTodo() {
  yield takeEvery('DELETE_TODO', deleteTodo)
}


// function* watchAndLog() {
//   yield takeEvery('*', function* logger(action) {
//     const state = yield select()

//     console.log('action', action)
//     console.log('state after', state)
//   })
// }

function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('TODO_CREATED')
  }
  yield put({type: 'SHOW_CONGRATULATION'})
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddToDo(),
    watchDeleteTodo(),

    watchFirstThreeTodosCreation()
  ])
};




// function* watchAndLog() {
//   yield takeEvery('*', function* logger(action) {
//     const state = yield select()

//     console.log('action', action)
//     console.log('state after', state)
//   })
// }


