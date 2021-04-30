import React from 'react'
import './SliderFood.css'

export default function SliderFood(props) {
    return (
        <div className = "foodContainer">
            <div className = "imageContainer">
            <div className = "imageOuter" style = {{background:`url(${props.foodImg})`}}> 
                </div>
               <div className = "foodName"><p>{props.foodName}</p></div> 
            </div>
            
               {/* <div className = "lineDesign"></div> */}
            </div>

    )
}
