import {GET_ACTION_FAIL, GET_ACTION_SUCCESS} from "./actionTypes.jsx";


const initialState={
    success:false,
    fail:false
}
const addNoteReducers=(state=initialState,action)=>{
    switch(action.type){
        case GET_ACTION_SUCCESS:
            return{
                ...state,
                success: action.success
            }

        case GET_ACTION_FAIL:
            return{
                ...state,
                fail: action.fail
            }
        default:
            return state;
    }
}
export default addNoteReducers