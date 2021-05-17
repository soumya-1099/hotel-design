import React from 'react'
import './SliderFood.css'

export default function SliderFood(props) {
    return (
        <div className = "classContainer">
            <div>
            <div className = "mainContainer">
                <div className="items">
                    <img src={props.foodImg} alt="" className="foodImage"/>
                    <p>{props.foodName} </p>
            </div>
            </div>
            </div>
            
            <div className = "lineDesign"></div>
        </div>
    )
}
