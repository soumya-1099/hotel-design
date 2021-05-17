import React from 'react'
import './FooterComp.css'
import imageFooter from '../images/footerImg.jpg'
import { Layout } from 'antd';
const {Footer} = Layout;


export default function FooterComp() {
    return (
        <div>
            <div className = "image" style = {{backgroundImage: `url(${imageFooter})`}}>
                <div className = "firstContent">#55,Manjunatha Arcade,KumarSwamy layout</div>
        <div>Bengaluru, Karnataka - 560085</div>
        <div className = "secondContent"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15925 4.1666C3.15925 4.027 3.29912 3.71289 3.82364 3.50348C4.90764 3.11957 3.85861 0.711383 3.22919 0.362371C2.98441 0.222766 1.5857 -0.0913444 0.606601 1.82822C0.396794 5.77206 4.90764 10.5884 8.859 10.6931C10.8522 9.8206 10.6424 8.42455 10.5375 8.14534C10.1878 7.48221 7.8799 6.33048 7.39035 7.34261C7.18055 7.83123 6.86584 7.97083 6.72597 7.97083C6.02661 7.93593 3.15925 4.86463 3.15925 4.1666ZM10.8172 6.26067C10.7822 6.67949 10.1528 6.64459 10.1528 6.22577C10.2927 3.08466 8.29952 0.955692 5.15241 0.850988C4.7328 0.850988 4.7328 0.187865 5.15241 0.222766C8.68416 0.32747 10.9221 2.73565 10.8172 6.26067ZM7.70506 5.84186C7.70506 6.26067 7.07564 6.26067 7.07564 5.84186C7.07564 4.75992 6.41125 4.027 5.29229 3.95719C4.90764 3.92229 4.94261 3.29407 5.36222 3.29407C6.7959 3.39878 7.74003 4.41091 7.70506 5.84186ZM9.24365 5.94656C9.24365 6.36538 8.61423 6.36538 8.61423 5.94656C8.61423 3.88739 7.35539 2.56115 5.32725 2.42154C4.90764 2.38664 4.94261 1.75842 5.36222 1.79332C7.74003 1.96783 9.24365 3.53838 9.24365 5.94656Z" fill="#FF240C"/>
        </svg> +91 9898989898</div>
        </div>
         
        <div className = "bottomDesign">
            License Number: 12345678987654321 
        </div>
        </div>
        
    )
}
