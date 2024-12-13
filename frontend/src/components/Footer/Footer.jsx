import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Delicious meals, fast delivery, and seamless ordering—your satisfaction is our priority at Tomatao. Explore a variety of cuisines crafted to perfection, right at your fingertips. From fresh ingredients to exceptional service, we’re here to make every bite memorable. Thank you for choosing Tomatao, where taste meets convenience!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
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
            <li>+1-856-212-7890</li>
            <li>contact@tomato.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
     Copyright  2024 © Tomatao. All Rights Reserved. Savor the flavors with us!
      </p>
    </div>
  );
};

export default Footer;
