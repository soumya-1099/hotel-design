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
            <SliderFood foodImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ronuvrugbh9dgoifgs3f" foodName = "Today's Special"/>
            <SliderFood foodImg = " https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hojrkacmz00pzghf9uj6"foodName = "Meals"/>
            <SliderFood foodImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ldxfhooh2esmzu7y5ou5" foodName = "Soup"/>
            <SliderFood foodImg = {mainCourse1Img} foodName = "Main course"/>
            <SliderFood foodImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ronuvrugbh9dgoifgs3f" foodName = "Dessert"/>
            <SliderFood foodImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wjjsfrjlsbseuzguxa7d" foodName = "Main Course"/>
            
            </div>
    )
}
