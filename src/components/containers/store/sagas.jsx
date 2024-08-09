import {takeEvery,call,put} from 'redux-saga/effects'
import {GET_ACTION_VALUE} from "./actionTypes.jsx";
import axios from "axios";
export default function* AddNotesSagas(){
    yield takeEvery(GET_ACTION_VALUE,getNotesSaga)
}
function* getNotesSaga(action){
    console.log('getting notes saga here',action)
    const headerParams={
        'content-type': 'application/json'
    }
    const createNoteValue={
        name: action.noteValue,
        id: Math.floor(Math.random()*100)
    }
    console.log(createNoteValue)
    try{
        const response = yield call(axios.post,'https://console.firebase.google.com/u/0/project/react-notes-app-2023/database/react-notes-app-2023-default-rtdb/data/~2F/newValue.json',createNoteValue,{headers:headerParams})
        console.log(response)
    }catch(e){
        alert(e.message)
    }
}