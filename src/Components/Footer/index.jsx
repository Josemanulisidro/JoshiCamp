import { NavLink } from "react-router-dom";

import "./footer.css";
import facebook from "../../../icons/facebook.svg"
import instagram from "../../../icons/instagram.svg"
import tiktok from "../../../icons/tiktok.svg"
import watsapp from "../../../icons/whatsapp.svg"

const Footer = () =>{
    return(
        <nav className="footer">
            <ul className="nav-links-footer">
                <li>
                    <NavLink>
                        Siguenos
                    </NavLink>
                </li>
                <li>
                    <a href="https://www.facebook.com"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={facebook} 
                            alt="facebook-icon" 
                            className="h-8 footer-icons"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={instagram} 
                            alt="instagram-icon" 
                            className="h-8 footer-icons"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/es-419/"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={tiktok} 
                            alt="tiktok-icon" 
                            className="h-8 footer-icons"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://web.whatsapp.com/"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={watsapp} 
                            alt="watsapp-icon" 
                            className="h-8 footer-icons"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Footer;