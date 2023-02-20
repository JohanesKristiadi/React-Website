import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/About.css"

const About = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="about">
                    <h1>About Page</h1>
                    <p>Ini merupakan halaman about dari projek</p>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default About