import React from 'react';
import {GET_ACTION_FAIL, GET_ACTION_SUCCESS, GET_ACTION_VALUE} from "./actionTypes.jsx";

export  default  function Actions(noteValue) {
    console.log(noteValue)
    return {
        type:GET_ACTION_VALUE,
        noteValue
    }
}
export  function Actions_Success(success) {
    console.log(success)
    return {
        type:GET_ACTION_SUCCESS,
        success
    }
}
export function Actions_Fail(fail) {
    console.log(fail)
    return {
        type:GET_ACTION_FAIL,
        fail
    }
}
