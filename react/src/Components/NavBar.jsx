import { NavLink } from "react-router-dom";
import '../assets/styles.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg p-4 fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='./public/Brand-assets/ABC-logo-large.svg' className='' width={80} height={80}></img>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                                end
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/browse"
                                end
                            >
                                Browse Classes
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/timetable"
                                end
                            >
                                Class Timetable
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/savedclasses"
                                end
                            >
                                Saved Classes
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            <form class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Find your class"/>
                        <button class="btn btn-primary" type="button">Search</button>
                </form>
        </nav>
    );
}

export default NavBar;