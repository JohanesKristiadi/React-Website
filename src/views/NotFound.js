import React from "react";
import MainLayout from "../layouts/MainLayout";

function NotFound() {
    return (
        <MainLayout>
            <div style={container}>
                <h1>404 Not Found Page</h1>
            </div>
        </MainLayout>
    )
}

export default NotFound

const container = {
    padding :"0 6rem",
}