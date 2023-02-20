import React from "react";
import "../style/Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <div className="Navbar">
            <h3>Bagian Navbar</h3>
            <ul className="my-ul">
                <li><Link to ="/"> </Link>Home</li>
                <li><Link to ="/about"> </Link>About</li>
                <li><Link to ="/contact"> </Link>contact</li>
            </ul>
        </div>
    )
}

export default Navbar