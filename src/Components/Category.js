import React, {useState} from 'react'
import './Category.css'
import data from './data.json'
import FoodItem from './FoodItem'
import {UpOutlined, DownOutlined} from "@ant-design/icons";

export default function Category(props) {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    return ( 
        <div>
        <div className = "recommendContainer">
             <div className = "textName">
                <h4>{props.categoryName}</h4>
                <span onClick = {()=>setShow1(!show1)} style = {{paddingTop:"21px"}}>
                {show1?<UpOutlined/>:<DownOutlined/>}
                </span>
            </div>
            <div className = "foodData1">
            {show1?data.map(item => <FoodItem itemName = {item.itemname} foodPrice = {item.price} foodImage = {item.imgLink}/>):null}
            </div>
           <div className = "endDesign"></div>
        </div>

        <div className = "textName">
            <h4>{props.categoryName1}</h4>
        </div>

        <div>
            <div className = "textName">
           <p>{props.categoryName2}</p>
            <span onClick = {() => setShow2(!show2)}style = {{paddingTop:"21px"}}>
                {show2?<UpOutlined/>:<DownOutlined/>}</span></div>
                {show2? data.map(item => <FoodItem itemName = {item.itemname}foodPrice = {item.price} foodImage = {item.imgLink} />):null}
            <div className = "lineDesign"></div>
        </div>

        <div>
        <div className = "textName">
           <p>{props.categoryName3}</p>
            <span onClick = {() => setShow3(!show3)}style = {{paddingTop:"21px"}}>
                {show3?<UpOutlined/>:<DownOutlined/>}</span></div>
                {show3? data.map(item => <FoodItem itemName = {item.itemname}foodPrice = {item.price} foodImage = {item.imgLink} />):null}
            <div className = "lineDesign"></div>
        </div>

        <div>
            <div className = "textName">
           <p>{props.categoryName4}</p>
            <span onClick = {() => setShow4(!show4)}style = {{paddingTop:"21px"}}>
                {show4?<UpOutlined/>:<DownOutlined/>}</span></div>
                {show4? data.map(item => <FoodItem itemName = {item.itemname} foodPrice = {item.price} foodImage = {item.imgLink}/>):null}
            <div className = "lineDesign"></div>
        </div>

        <div>
            <div className = "textName">
           <p>{props.categoryName5}</p>
            <span onClick = {() => setShow5(!show5)}style = {{paddingTop:"21px"}}>
                {show5?<UpOutlined/>:<DownOutlined/>}</span></div>
                {show5? data.map(item => <FoodItem itemName = {item.itemname} foodPrice = {item.price} foodImage = {item.imgLink}/>):null}
            {/* <div className = "lineDesign"></div> */}
            <div className = "endDesign"></div>
        </div>

        </div>
    )
}