import {all,fork} from 'redux-saga/effects';
import AddNotesSagas from "../store/sagas.jsx";
export default  function* rootSaga(){
    yield all([fork(AddNotesSagas)])
}