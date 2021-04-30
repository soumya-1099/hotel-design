import React from 'react'
import {StarFilled,StarTwoTone,StarOutlined } from "@ant-design/icons";
function HeadFoodItem(props) {
    return (
        <div className="HeadFoodContainer">
            <div><img id = "veglogo" src = {props.image}/></div>
            <div id = "content">
            <div id = "name">{props.name}</div>
                <p>{props.type}</p>
                <p>{props.place}</p>
                <div className = "starstyle">
                    <StarFilled style = {{color:"yellow"}}/>
                    <StarFilled style = {{color:"yellow"}}/>
                    <StarFilled style = {{color:"yellow"}}/>
                    <StarTwoTone style = {{color:"yellow"}}/>
                    <StarOutlined style = {{color:"yellow"}}/>
                    100+ Rating
                </div>
            </div>
        </div>
    )
}

export default HeadFoodItem
