import React from 'react'
import './FoodItem.css'
import {StarFilled } from "@ant-design/icons";

export default function FoodItem(props) {
    return (
        <div className = "recommendFoodConatiner">
           
            <div className = "content">
                <div className = "textLeft">
                <div className = "textContent">
                    <div className = "vegSquare">
                    <div className = "vegCircle"></div></div>
                    <StarFilled className = "star"></StarFilled>
                    <p className = "paraText">Best Seller</p>
                </div>  
                <div className = "textContent2">
                    <div>{props.itemName}</div>
                    <div className = "cost">{props.foodPrice}</div>
                </div>
                </div>
                <div className = "imageRight">
                    <img src = {props.foodImage} className = "imageContent" width= "98px"/>
                </div>
            </div>
            <hr className = "horizontalLine"></hr>
        </div>
    )
}
