import React from "react";
import "../style/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <h3>Bagian Navbar</h3>
            <ul className="my-ul">
                <li><Link to="/" className="link"> Home</Link></li>
                <li><Link to="/about" className="link"> About</Link></li>
                <li><Link to="/contact" className="link"> contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar