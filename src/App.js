import React from "react"
import Navbar from "./navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"



export default function App(){
    const cardData = data.map(item => {
        return (
                <Card 
                    key={item.id}
                    item={item}
                />
            )
        })
        
    return(
        <div>
            <Navbar />
            <Hero />
            <section className="section--box">
                {cardData}
            </section>
        </div>
    )
}