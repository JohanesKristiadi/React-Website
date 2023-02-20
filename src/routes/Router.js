import React from "react";
import { Route } from "react-router-dom";

import Home from "../views/Home.js"
import About from "../views/About.js"
import Contact from "../views/Contact.js"

const Router = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path={"/Contact"} exact component={Contact} />
        </React.Fragment>
    )
}

export default Router;