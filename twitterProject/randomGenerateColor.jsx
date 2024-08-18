import {useEffect, useState} from "react";
import SavedPlates from "./SavedPlates.jsx";


function RandomGenerateColor() {
    const[color,setColor] = useState([])
    const [savedPelates,setSavePelates] = useState([])
    const generatRandomColor = () => {
        const letters="0123456789ABCDEF";
        let color="#";
        for(let i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color
    }
    useEffect(() => {
        const randomPlatte = Array.from({length:5},generatRandomColor)
        setColor(randomPlatte)
    }, []);
    const randomPlattes=()=>{
        const randomPlatte = Array.from({length:5},generatRandomColor)
        setColor(randomPlatte)
    }
    const savePelates=()=>{
        setSavePelates([...savedPelates],color)
    }
    return (
        <>
            <h1>Color Palettes Generators</h1>
            <div className="">
                {color.map((color,index) => (
                    <div key={index} style={{backgroundColor:color}} onClick={savePelates}></div>
                ))}
            </div>
            <button onClick={generatRandomColor}>Generate New Plates</button>
            <SavedPlates savedPlattes={randomPlattes}/>

        </>
    );
}

export default RandomGenerateColor;