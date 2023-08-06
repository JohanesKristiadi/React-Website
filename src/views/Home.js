import React from "react";
import "../style/Home.css"
import MainLayout from "../layouts/MainLayout";

import { Link } from "react-router-dom"

class Home extends React.Component {
    // membuat state untuk membaca data
    state = {
        skill: [{
            id: 1,
            name: "Javascript",
            description: "Javascripts descriptions",
            image: require("../images/logo-js.png")
        },
        {
            id: 2,
            name: "Vue",
            description: "Vue Descriptions",
            image: require("../images/logo-vue.png")
        },
        {
            id: 3,
            name: "React",
            description: "React Descriptions",
            image: require("../images/logo-react.png")
        },
        {
            id: 4,
            name: "Boostrap",
            description: "Boostrap descriptions",
            image: require("../images/logo-boostrap.png")
        }
        ]
    }
    render() {
        const { skill } = this.state
        return (
            <MainLayout>

                <p style={{ paddingLeft: "6rem" }}>Home Page</p>
                <div className="container">
                    {/* melakukan perulangan untuk membaca data skill */}
                    {skill.map(item =>
                        <div key={item.id} className="card">
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt={item.name} className="img" />
                                <h3>{item.name}</h3>
                            </Link>
                        </div>
                    )}
                </div>
            </MainLayout>
        )
    }
}

export default Home;
