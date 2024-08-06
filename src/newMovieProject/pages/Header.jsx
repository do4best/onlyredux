import logo from '../../assets/react.svg'
import {Link,NavLink} from "react-router-dom";

export function Header() {
    const isActive="link-primary"
    const inActive = "link-secondary"
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
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
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <NavLink to={"/"} className={({isActive})=> isActive?isActive:inActive} end>Home</NavLink>
                            </li>
                            <li className="nav-item ms-3 ">
                                <NavLink to={"/movies/popular"} className={({isActive})=> isActive?isActive:inActive}>Popular</NavLink>
                            </li>
                            <li className="nav-item ms-3 ">
                                <NavLink to={"/movies/top"} className={({isActive})=> isActive?isActive:inActive}>Top</NavLink>
                            </li>
                            <li className="nav-item ms-3 ">
                                <NavLink to={"/movies/upcoming"}  className={({isActive})=> isActive?isActive:inActive}>Upcoming</NavLink>
                            </li>
                        </ul>
                        <form className="me-2 mb-2 mb-lg-0">
                            <input type="text" className="form-control form-control-sm" placeholder="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

