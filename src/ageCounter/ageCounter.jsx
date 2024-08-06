import React, {useEffect} from 'react';
import {useState} from "react";

function AgeCounter(props) {
    const [age,setAge] = useState(0)

    const handelChange=(e)=>{
        setAge(e.target.value)
    }
    useEffect(() => {
        let date = new Date()
        console.log( age-date)

    }, [age]);

    return (
        <>
            <div className=" border-8 flex flex-col m-auto text-center">
                <div className={"text-8xl"}>Age Calculator</div>
                <div className={"text-4xl mt-5"}>Enter your Date of Birth</div>
                <div><input type="text" className={"border-2"}/></div>
                <div><button type={"button"} className={"text-white bg-blue-600 p-4 rounded mt-2"} onClick={handelChange}> Calculate Your Age</button></div>
                <div><h1 className={"mt-2"}>Your Age is {age} Years Old</h1></div>
            </div>
        </>
    );
}
export default AgeCounter;