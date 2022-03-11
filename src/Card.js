import React from "react"
import StarPicture from "./images/star.png"

export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--section">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`./images/${props.item.coverImg}`)} alt="card--experience--photo" className="card--experience--photo" />
            <div className="card--stats">
                <img src={StarPicture} alt="card--star--photo" className="card--star--photo"/>
                <span className="card--star--ratting">{props.item.stats.ratting}</span>
                <span className="card--star--text">({props.item.stats.reviewCount})</span>
                <span className="card--star--text">• {props.item.location}</span>
            </div>
            <p className="card--experience--name">{props.item.title}</p>
            <p className="card--experience--price">From ${props.item.price} <span>/ person</span></p>
        </div>
    )
}