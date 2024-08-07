import {takeEvery} from 'redux-saga/effects'
import {GET_ACTION_VALUE} from "./actionTypes.jsx";
export default function* AddNotesSagas(){
    yield takeEvery(GET_ACTION_VALUE,getNotesSaga)
}
function* getNotesSaga(action){
    console.log('getting notes saga here',action)
}