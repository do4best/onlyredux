import {GET_ACTION_VALUE} from "./actionTypes.jsx";


const initialState={
    flag:false
}
const addNoteReducers=(state=initialState,action)=>{
    switch(action.type){
        case GET_ACTION_VALUE:
            return{
                ...state,
                flag: true
            }
        default:
            return state;
    }
}
export default addNoteReducers