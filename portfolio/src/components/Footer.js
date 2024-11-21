import React from "react";
import logo from "../assets/loggo.png";
import user from "../assets/user_icon.svg";

export default function Footer() {
  return (
    <div  className="footer">
      <div className="footer-top">
        <div className="top-left">
          <img src={logo} alt="" />
          <p>
            I am a frontend developer from Kenya with 3 years of experience in
            multiple companies like REDUZER, Serene and MyTECH.
          </p>
        </div>
        <div className="top-right">
            <div className="top-right-email">
                <img src={user} alt="" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="top-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <div className="footer-bottom-left">
        <p style={{textAlign: 'center'}}>©{new Date().getFullYear()} Created by Bubba Jaymes.</p>
        </div>
       <div className="footer-bottom-right">
        <p>Term and Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
       </div>
      
      </div>
      
    </div>
  );
}
