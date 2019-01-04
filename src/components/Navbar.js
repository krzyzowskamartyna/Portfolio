import React from "react";
import '../css/navbar.css';


const Navbar = () => (
    <div>
        <nav>
            <ul>
                <li className="blank"></li>
                <li>
                    <a className="link" href="/">Home</a>
                </li>
                <li>
                    <a className="link" href="#about">About</a>
                </li>
                <li>
                    <a className="link" href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a className="link" href="/contact/">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navbar;