import React from 'react';

function AddNotes(props) {
    const handelChange=(e)=>{
        console.log(e.target.value)
    }
    return (
        <>
        <div className="">
            <h1 className={"text-center text-primary"}>Add New Notes</h1>
            <div className="form-control d-flex flex-row ">
                <input type="text" className={"form-control"} placeholder={"To Do App"} onChange={handelChange}/>
                <button className="btn btn-primary text-wrap  px-5 py-1 ms-3 rounded">Add To Do</button>
            </div>
        </div>
        </>
    );
}

export default AddNotes;