import React from 'react';

function MainCalculator(props) {
    const createDigits=()=>{
        const digits=[];
        for(let i=1;i<10;i++){
            digits.push(<button key={i}>{i}</button>);
        }
        return digits;
    }
    return (
        <>
            <div className="   app" style={{display: 'flex',  justifyContent: 'center', alignItems:"center",minHeight:"100vh"}}>
                <div className="calculator" style={{width:"100%",maxWidth:"400px",backgroundColor:"#FFF",borderRadius:"16px",overflow:"hidden",boxShadow:"0px 2px 64px rgba(0,0,0,0.2)"}}>
                    <div className="display">
                        <span>(0)</span>0
                    </div>
                    <div className="operator">
                        <button>/</button>
                        <button>*</button>
                        <button>+</button>
                        <button>-</button>
                        <button>DELL</button>
                    </div>
                    <div className="digits">
                        {createDigits()}
                        <button>0</button>
                        <button>.</button>
                        <button>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainCalculator;