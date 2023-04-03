import React from "react"
import ReactDom from "react-dom"
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"

function App() {
    return (
        <div className="container">
            <Main/>
            <Footer/>
        </div>
    )
}
ReactDom.render(<App/>, document.getElementById('root'))