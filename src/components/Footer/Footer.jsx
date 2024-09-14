import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="QuickBite Logo" />
            <p>Your go-to food delivery app, bringing delicious meals from your favorite local restaurants straight to your doorstep. Whether you're craving healthy salads, mouth-watering pasta, or indulgent desserts, we've got something for everyone. Fast, reliable, and easy to use – satisfy your hunger with just a few taps. QuickBite: where fresh flavors meet speedy delivery!</p>
            <div className="footer-social-icons">
                <a href="https://www.linkedin.com/in/iamnitesh108/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-social-icon" src={assets.facebook_icon} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/iamnitesh108/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-social-icon" src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/iamnitesh108/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-social-icon" src={assets.linkedin_icon} alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+977-9807341833</li>
                <li>contact@quickbite.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © quickbite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
