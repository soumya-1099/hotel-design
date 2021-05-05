import React from 'react'
import './Recommend.css'
import RecommendFood from './RecommendFood'
import {UpOutlined} from "@ant-design/icons";
import dosaImg from '../images/Dosa.jpg'
import ragiImg from '../images/RagiDosa.jpeg'
import idliImg from '../images/PodaIdli.jpg'
import rollImg from'../images/RotiRoll.jpg'

export default function Recommend(props) {
    return (
        <div className = "recommendContainer">
             <div className = "textName">
                <h4>Recommend(5)</h4>
                <UpOutlined className = "upOutline"></UpOutlined>
            </div>

            <RecommendFood itemName = "Mysore Masala Dosa" foodPrice = "90 ₹" foodImage = {dosaImg}/>
            <RecommendFood itemName = "Ragi Masala Dosa" foodPrice = "60 ₹" foodImage = {ragiImg}/>
            <RecommendFood itemName = "Podi Idli" foodPrice = "80 ₹" foodImage = {idliImg}/>
            <RecommendFood itemName = "Sizwaan Masala Dosa" foodPrice = "70 ₹" foodImage = {rollImg}/>

            
        </div>
    )
}













{/* <div className = "recommendContainer">
        <h3>Recommended(5) <UpOutlined className = "upIcon"/></h3>
        </div>

        <div className = "foodList"> 
        <div className = "foodNames">
        <div className = "foodDetailsLeft">
        <div className = "vegSymbolSquare"><div className = "vegSymbolCircle"></div></div>
        <StarFilled className = "starFood"/><div className = "bestSell"><h6>Best Seller</h6></div>
        </div>
        <div className = "foodImageRight">
        <div className = "foodImages">
        <RecommendFood recommendImg = {dosaImg}/>
        </div>
        </div>   
        </div>
        </div>
        <div className = "nameFood">
            <h5>Mysore Masala Dosa</h5>
        </div>
        <div className = "lineDesign"></div> */}