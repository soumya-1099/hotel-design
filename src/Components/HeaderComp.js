import React from 'react'
import './HeaderComp.css'
import HeadFoodItem from './HeadFoodItem'
import { Input } from 'antd';
// import {SearchOutlined } from "@ant-design/icons";
import img1 from '../images/HeadBckgnd.jpg'
import img2 from '../images/VeggieLogo.jpg'


export default function HeaderComp() {
    return (
        <div>
            <div id='main'style={{ backgroundImage: `url(${img1})`}}>
            <HeadFoodItem image= {img2} name = "Dwarka Grand" type = "pure veg" place ="Kumarswamy Layout"/>
            <div className= "SearchBar">
            <Input className= "searchbarstyle" placeholder="Search for food items" />
            <div className = "searchIconStyle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#ADADAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div></div></div>

            {/* <SearchOutlined className = "searchIconStyle"/></div></div> */}
        </div>
    )
}
