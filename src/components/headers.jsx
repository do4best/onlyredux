import React from 'react';
import {Link} from "react-router-dom";

function Headers(props) {
    return (
        <>
        <ul className={"  d-flex flex-row gap-5 justify-content-center align-content-center"} style={{background:"black",padding:"1rem"}}>
            <li className={"list-group-item fs-3 fw-bolder"} style={{color:"#ffdd08"}}><Link to={"/"}>Notes List</Link></li>
            <li className={"list-group-item fs-3 fw-bolder"} style={{color:"#ffdd08"}}><Link to={"/add-new-notes"}>Add Notes</Link></li>
        </ul>

        </>
    );
}

export default Headers;