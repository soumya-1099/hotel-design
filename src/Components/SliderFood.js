import React from 'react'
import './SliderFood.css'

export default function SliderFood(props) {
    return (
        // <div className = "foodContainer">
        //     <div className = "imageContainer">
        //     <div className = "imageOuter" style = {{background:`url(${props.foodImg})`}}> 
        //         </div> </div>
        //        <h5 className = "foodName">{props.foodName}</h5> 
        //     </div>
        <div className = "classContainer">
            <div className = "mainContainer">
                <div className="items">
                    <img src={props.foodImg} alt="" className="foodImage"/>
                    <p>{props.foodName} </p>
                </div>
            </div>
        </div>
    )
}
