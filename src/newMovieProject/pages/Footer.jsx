import React from 'react';

 export function Footer(props) {
    return (
        <>
            <div className="container" >
                <div className="row" >
                    <hr/>
                    <div className="col-6 col-sm-6" >
                        All Right Reserved
                    </div>
                    <div className="col-6 col-cm-6">
                        <ul className={"list-group list-group-flush"}>
                            <li className={"list-group-item"}>About</li>
                            <li className={"list-group-item"}>Private Policy</li>
                            <li className={"list-group-item"}>Licensing</li>
                            <li className={"list-group-item"}>Contact</li>
                        </ul>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    );
 }

