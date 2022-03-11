import React from "react"
import PhotoGrid from "./images/photo-grid.png"

export default function Hero(){
    return (
        <div className="hero--section">
            <img src={PhotoGrid} alt="photo-grid" className="hero--photo--grid" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
