import React from 'react';
const dummyNotes=[
    {name:"First Note",
    id:1},
    {name:"Second Note",
        id:2},
    {name:"Third Note",
        id:3}
]
function NotesList(props) {
    return (
        <>
<div className="">
    <h1 className={"text-center text-primary"}>Note List</h1>
    <ul className={"list-group d-flex flex-row justify-content-around "}>
        {dummyNotes.map((item)=>
        <li className={"list-group-item border-4 text-center bg-black text-white "} style={{width:"250px",height:300}} key={item.id}>{item.name}</li>)}
    </ul>
</div>
        </>
    );
}

export default NotesList;