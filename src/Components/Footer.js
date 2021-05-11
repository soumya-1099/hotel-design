import React from 'react'
import './Footer.css'
import imageFooter from '../images/footerImg.jpg'

export default function Footer() {
    return (
        <div className = "footerDesign">
           <div style={{ backgroundImage: `url(${imageFooter})`}}></div>
              
        </div>
    )
}
