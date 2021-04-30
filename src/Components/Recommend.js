import React from 'react'
import './Recommend.css'
import {UpOutlined } from "@ant-design/icons";
import RecommendFood from './RecommendFood'
// import dosaImg from '../images/Dosa.jpg'
// import ragiImg from '../images/RagiDosa.jpg'
// import idliImg from '../images/PodaIdli.jpg'
// import rollImg from'../images/RotiRoll.jpg'

import {StarFilled} from "@ant-design/icons";

export default function Recommend(props) {
    return (
        <div className = "recommendContainer">
            {/* <RecommendFood scrollImg = {dosaImg} name = "Mysore Dosa" /> */}
            {/* <RecommendFood scrollImg = {ragiImg} /> */}
            {/* <RecommendFood scrollImg = {idliImg} /> */}
            {/* <RecommendFood scrollImg = {rollImg} /> */}

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