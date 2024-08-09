import React, {useState} from 'react';

const buttonStyle = {
    appearance: 'none',
    border: 'none',
    color: '#FFF',
    fontsize:"20px",
    padding:"16px",
    cursor:"pointer",
    transition:"0.4s"
}
const buttonExtra={
    flex:"1 1 33.333%",
    maxWidth:"33.333%",
    backgroundColor:"black",
    color:"white",
}
function MainCalculator(props) {
    const[calc,setCalc] = useState("");
    const[result,setResult] = useState("");
    const ops=['/','*','+','-','.'];
    const updateCalculate=(value)=>{
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }
        setCalc(calc + value)
        if(!ops.includes(value)){
            setResult(eval(calc+value).toString());
        }
    }
    const createDigits=()=>{


        const digits=[];
        for(let i=1;i<10;i++){
            digits.push(<button className={"flex-grow-1 bg-dark"} style={{...buttonStyle,...buttonExtra}} onClick={()=>updateCalculate(i.toString())} key={i}>{i}</button>);
        }
        return digits;
    }
    const calculate=()=>{
        setCalc(eval(calc).toString());
    }
    const deleteone=()=>{
        if(calc === ''){
            return;
        }
        const value = calc.slice(0,-1)
        setCalc(value)
    }
    return (
        <>
            <div className="   app" style={{display: 'flex',  justifyContent: 'center', alignItems:"center",minHeight:"100vh"}}>
                <div className="calculator" style={{width:"100%",maxWidth:"400px",backgroundColor:"#FFF",borderRadius:"16px",overflow:"hidden",boxShadow:"0px 2px 64px rgba(0,0,0,0.2)"}}>
                    <div className="display p-5 text-end bg-dark text-white fs-1 fw-bolder">
                        {result?<span className={"fs-3 text-danger"}>{result}</span>:''} {calc || "0"}&nbsp;
                    </div>
                    <div className="operator d-flex">
                        <button style={buttonStyle} className={"flex-grow-1 bg-success"}
                                onClick={() => updateCalculate('/')}>/
                        </button>
                        <button style={buttonStyle} className={"flex-grow-1 bg-success"}
                                onClick={() => updateCalculate('*')}>*
                        </button>
                        <button style={buttonStyle} className={"flex-grow-1 bg-success"}
                                onClick={() => updateCalculate('+')}>+
                        </button>
                        <button style={buttonStyle} className={"flex-grow-1 bg-success"}
                                onClick={() => updateCalculate('-')}>-
                        </button>
                        <button style={buttonStyle} className={"flex-grow-1 bg-success"} onClick={deleteone}>DELL
                        </button>
                        <button style={buttonStyle} className={"flex-grow-1 bg-success"} onClick={()=>setCalc("")}>C
                        </button>
                    </div>
                    <div className="digits d-flex flex-wrap">
                        {createDigits()}
                        <button style={{...buttonStyle,...buttonExtra}} onClick={()=>updateCalculate('0')}>0</button>
                        <button style={{...buttonStyle,...buttonExtra}} className={"flex-grow-1 bg-dark"} onClick={()=>updateCalculate('.')}>.</button>
                        <button style={{...buttonStyle,...buttonExtra}} className={"flex-grow-1 bg-dark"} onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainCalculator;