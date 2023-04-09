import React from 'react'
import "./FooterStyles.css"

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                    <div>
                        <p>Jharkhand, India</p>
                    </div>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                    editz@gmail.com</h4>
                    
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is Pravin Kumar. CEO & Founder of Editz. We at Editz create awesome and audience targeting content for social media.</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                <FaTwitter size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                <FaLinkedin size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer