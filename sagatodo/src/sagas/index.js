

import axios from 'axios';
import { call, put, takeEvery, all, select , take} from 'redux-saga/effects';

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



export function* createTodo(action) {
    const newObj ={"id":null,"title":"Lunctime","categories":"IT","content":"Aliens"}
  try {
    yield call(axios.post, `${ROOT_URL}/posts${API_KEY}`, newObj);
    yield put({type:'FETCH_TODOS'});
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

function * watchAddToDo() {
  yield takeEvery('ADD_TODO', createTodo)
}

export function* deleteTodo({id}) {
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





export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddToDo(),
    watchDeleteTodo()
  ])
};

// axios.post(url[, data[, config]])



// export function* deleteTodo({id}){
//     try { 
//         yield call(axios.delete, $ROOT_URL)
//     } catch(error){

//     }
// }


// function* watchDeleteTodo(){
//     yield takeEvery('DELETE_TODO', deleteTodo)
// }



// watchDeleteTodo()

// const mapDispatchToProps = dipatch => {
//     return {
//         onIncrementCounter: () => dipatch({type: ActionTypes.INCREMENT})
    
//     }
// };

// export default connect(mapStateToProps, mapDipatchToProps)(fetchTodos)