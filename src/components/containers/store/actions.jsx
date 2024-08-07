import React from 'react';
import {GET_ACTION_VALUE} from "./actionTypes.jsx";

function Actions(noteValue) {
    console.log(noteValue)
    return {
        type:GET_ACTION_VALUE,
        noteValue
    }
}

export default Actions;