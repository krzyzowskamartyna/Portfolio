import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/navbar.css';

const About = () => <h2>About</h2>;
const Portfolio = () => <h2>Portfolio</h2>;
const Contact = () => <h2>Contact</h2>;

const Navbar = () => (
    <Router>
        <div>
            <nav>

                <ul>
                    <li className="blank"></li>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about/">About</Link>
                    </li>
                    <li>
                        <Link className="link" to="/portfolio/">Portfolio</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Route exact path="/" />
            <Route path="/about/" component={About} />
            <Route path="/portfolio/" component={Portfolio} />
            <Route path="/contact/" component={Contact} />
        </div>
    </Router>
);

export default Navbar;