/**need a footer so the bottom of the page isnt ugly anymore */
import React from 'react'
import './Footer.css'

const Footer = ({ children }) => (
    <div className="Footer">
        <div className="FooterText">
            <p>Thanks for visiting my page! Hopefully you were able to find what you were looking for to make great bbq!</p>
        </div>
        <div className="Copywright">
            {children}
        </div>
    </div>

)

export default Footer;