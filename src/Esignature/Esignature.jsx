
import TitleShow from "./TitleShow.jsx";
import {useState} from "react";

function Esignature() {
    const [name,setName] = useState("Nasir")
    const [date,setDate] = useState("")
    const inputStyle={
        border:"none",
        borderBottom:"2px dotted",
        outline:"none",
        padding:".35rem 0"
    };
    return (
        <>
<TitleShow title={name} classes={""}/>
            <TitleShow title={date}/>
            <p className={"mt-20"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut debitis eum incidunt labore nesciunt nihil nostrum omnis quam quidem recusandae saepe, ut voluptate? Autem culpa, delectus deserunt dolor ducimus eaque fuga hic illum minus molestiae nemo nesciunt nostrum pariatur perferendis quae quidem quis sapiente suscipit totam voluptates. Aliquid, quo.</p>
<footer className={"flex justify-around relative h-svh"}>
            <input type="date" value={date} style={inputStyle} className={"border-2"} onChange={(e)=>setDate(e.target.value)}/>
            <input type="text" value={name} style={inputStyle} onChange={(e)=>setName(e.target.value)}/>
</footer> </>
    );
}

export default Esignature;