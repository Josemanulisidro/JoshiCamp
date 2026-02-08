import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../../img/logo.jpg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/" end>
                      <img src={logo} alt="logo-icon" className="h-20" />
                    </NavLink>
            </div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/" end>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/solutions">
                        Soluciones
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/news-and-events">
                        Nuevas noticias
                    </NavLink>
                </li> */}
                {/* <li>
                    <NavLink to="/imageGallery">
                        Galeria
                    </NavLink>
                </li> */}
                    <li>
                    <NavLink to="/GetKnow">
                        Conocenos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
