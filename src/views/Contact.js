import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Contact.css"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact">
                <h1>Contact Page</h1>
                <p>Ini merupakan halaman contact</p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact