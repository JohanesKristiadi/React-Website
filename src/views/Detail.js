import React from "react"
import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

class Detail extends React.Component {
    state = {
        skills: [{
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
        ],
        data: ""
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const data = this.state.skills.find(item => item.id === parseInt(id))
        this.setState({ data })
    }

    render() {
        const { data } = this.state
        return (
            <MainLayout>
                <div style={container}>
                    <h1>{data.name}</h1>
                    <div style={box}>
                        <img style={img} src={data.image} alt={data.image} />
                        <div>
                            <p>{data.description}</p>
                            <Link to="/">bach home</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default Detail

const container = {
    padding: "0 6rem"
}

const img = {
    width: "15rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}

