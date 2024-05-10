import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className="left">
                <img src={assets.logo}/>
                <p>With just a dial and an empty stomach, a new food app that linked customers to local restaurants for savory morsels and sweet treats made its debut in 1950's busy diners.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="center">
                <h2>COMPANY</h2>
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privach Policy</li>
                </ul>
            </div>
            <div className="right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>9876543210</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
         </div>
         <hr/>
         <p className="footer-copyright">
© 2024 All rights reserved. This text is protected by copyright law.</p>
    </div>
  )
}

export default Footer