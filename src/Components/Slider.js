import React from 'react'
import SliderFood from './SliderFood'
import './Slider.css'
import todaysSplImg from '../images/TodaySpecial.jpg'
import mealsImg from '../images/Meals.webp'
import soupImg from '../images/Soup.jpg'
import mainCourse1Img from '../images/MainCourse1.jpg'
import dessertImg from '../images/Dessert.jpg'
import mainCourse2Img from '../images/MainCourse2.jpg'

export default function Slider(props) {
    return (
        <div className = "sliderFoodContainer">
            <SliderFood foodImg = {todaysSplImg} foodName = "Today's Special"/>
            <SliderFood foodImg = {mealsImg} foodName = "Meals"/>
            <SliderFood foodImg = {soupImg} foodName = "Soup"/>
            <SliderFood foodImg = {mainCourse1Img} foodName = "Main course"/>
            <SliderFood foodImg = {dessertImg} foodName = "Dessert"/>
            <SliderFood foodImg = {mainCourse2Img} foodName = "Main Course"/>
            </div>
    )
}
