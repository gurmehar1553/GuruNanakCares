import React, { useState } from "react";
import './ContactUs.css'
import email from '../../assets/email.jpeg';
import location from '../../assets/map.jpeg';
import phone from '../../assets/phone.jpeg';
import fb from '../../assets/fb.png';
import inst from '../../assets/inst.png';
import li from '../../assets/li.png';
import tw from '../../assets/tw.png';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { sendMsg } from "../../server";

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      subject:'',
      message:''
    })

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const sendMessage=(e)=>{
      e.preventDefault()
      const res = sendMsg(formData)
      console.log(res)
    }
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
  return (
    <div>
        <Header />
        <div className="containerr">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Get in touch with us for any questions, comments, or just to say hello! Fill out the form on our website or call. Connect with us on social media by following our social media handles. We're dedicated to helping you achieve your wellness goals and look forward to hearing from you!
          </p>

          <div className="info">
            <div className="information">
              <img className="iconn" src={location} alt='img'/>
              <p>Near gagan chownk, Street no-4, Rajpura, Punjab.</p>
            </div>
            <div className="information">
              <img className="iconn" src={email} alt='img'/>
              <p>healthcarewellnesshub@gmail.com</p>
            </div>
            <div className="information">
              <img className="iconn" src={phone} alt='img'/>
              <p>9867541203</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <img className="iconn" src={fb} alt='img'/>
              </a>
              <a href="#">
              <img className="iconn" src={tw} alt='img'/>
              </a>
              <a href="#">
              <img className="iconn" src={inst} alt='img'/>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
                <img className="iconn" src={li} alt='img'/>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={sendMessage} autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" id="name" className="input" placeholder="Name" onChange={handleChange} required />
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="input-container">
              <input type="text" name="subject" id="subject" className="input" placeholder="Subject" onChange={handleChange} required />
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" id="msg" required placeholder="Message" onChange={handleChange}></textarea>
            </div>
            <input type="submit" value="Send" className="btnn" />
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default ContactUs