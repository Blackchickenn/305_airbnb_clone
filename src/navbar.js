import React from "react"
import LogoPicture from "./images/airbnb-logo.png"

export default function Navbar(){
    return (
        <nav>
            <img src={LogoPicture} alt="airbnb-logo" className="nav--logo" />
        </nav>
    )
}