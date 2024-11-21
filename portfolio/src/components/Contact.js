import React from "react";
import theme from "../assets/theme_pattern.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";

export default function Contact() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "135e9f43-131c-430b-9869-570f423a4caf");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let us talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message that you want me to work on. You can contact
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>jaymesbubba14@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+254-716-641-112</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Nairobi, KE.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit
          </button>{" "}
        </form>
      </div>
    </div>
  );
}
