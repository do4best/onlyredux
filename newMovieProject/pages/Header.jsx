import logo from '../../assets/react.svg'
import {Link,NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {MdDarkMode} from "react-icons/md";
import {WiDaySunny} from "react-icons/wi";

export function Header() {
    const[darkMode,setDarkMode] = useState(false)
    const toggleMode=()=>{
        setDarkMode((pre)=>!pre)
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-bs-theme',
            darkMode ? 'dark' : 'light');
    }

    const issActive="text-primary"
    const inActive = "text-secondary"
    return (
        <header >
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <img src={logo} alt=""/>
                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row justify-content-around " id="navbarNav"
                         style={{marginLeft: "600px"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item  fs-5">
                                <NavLink to={"/"} className={({isActive}) => isActive ? issActive : inActive}
                                         end>Home</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-5 ">
                                <NavLink to={"/movies/popular"}
                                         className={({isActive}) => isActive ? issActive : inActive}>Popular</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-5 ">
                                <NavLink to={"/movies/top"}
                                         className={({isActive}) => isActive ? issActive : inActive}>Top</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-5 ">
                                <NavLink to={"/movies/upcoming"}
                                         className={({isActive}) => isActive ? issActive : inActive}>Upcoming</NavLink>
                            </li>

                        </ul>
                        <button onClick={toggleMode} data-bs-theme={"dark"} style={{marginRight:"300px"}}>{darkMode?<WiDaySunny/>:<MdDarkMode/>}</button>

                        <form className="me-2 mb-2 mb-lg-0">
                            <input type="text" className="form-control form-control-sm" placeholder="Search"
                                   aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

