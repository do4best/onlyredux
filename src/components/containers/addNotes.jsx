import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Actions from "./store/actions.jsx";
function AddNotes(props) {
    const [addNote,setaddNote] = useState("")
    const dispatch = useDispatch()
    const handelChange=(e)=>{
        const {value} = e.target;
        setaddNote(value)
    }
    const handelClick=()=>{
        dispatch(Actions(addNote))
    }
    return (
        <>
        <div className="">
            <h1 className={"text-center text-primary"}>Add New Notes</h1>
            <div className="form-control d-flex flex-row ">
                <input type="text" className={"form-control"} placeholder={"To Do App"} onChange={handelChange}/>
                <button onClick={handelClick} className="btn btn-primary text-wrap  px-5 py-1 ms-3 rounded">Add Notes</button>
            </div>
        </div>
        </>
    );
}

export default AddNotes;