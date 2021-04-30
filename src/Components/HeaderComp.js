import React from 'react'
import './HeaderComp.css'
import HeadFoodItem from './HeadFoodItem'
import Slider from './Slider'
import { Input } from 'antd';
import img1 from '../images/HeadBckgnd.jpg'
import img2 from '../images/VeggieLogo.jpg'


import {SearchOutlined } from "@ant-design/icons";
import Recommend from './Recommend';

export default function HeaderComp() {
    return (
        <div>
            <div id='main'style={{ backgroundImage: `url(${img1})`}}>
            <HeadFoodItem image= {img2} name = "Dwarka Grand" type = "pure veg" place ="Kumarswamy Layout"/>
            <div className= "SearchBar">
            <Input className= "searchbarstyle" placeholder="Search for food items" />
            <SearchOutlined className = "searchIconStyle"/></div></div>
            <Slider/>
            <Recommend/>

        </div>
    )
}
