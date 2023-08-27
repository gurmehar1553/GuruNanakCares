import React, { useState } from "react";
import './ContactUs.css'
import email from '../../assets/email.jpeg';
import location from '../../assets/map.jpeg';
import phone from '../../assets/phone.jpeg';
import fb from '../../assets/fb.png';
import inst from '../../assets/inst.png';
import yt2 from '../../assets/yt2.png'
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      subject:'',
      message:''
    })

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3btbntz', 'template_vwoqrnd', form.current, 'dyiqdYdPXEgqyIR8v')
        .then((result) => {
            console.log(result.text);
            toast.success("Message Sent!", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose : 4000
        })
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
  return (
    <div>
        <div className="containerr">
        <ToastContainer />
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
              <img className="iconn me-2" src={location} alt='img'/>
              <p>Gobind Colony, Rajpura, Punjab.</p>
            </div>
            <div className="information">
              <img className="iconn me-2" src={email} alt='img'/>
              <p>gurunanakcares@gmail.com</p>
            </div>
            <div className="information">
              <img className="iconn me-2" src={phone} alt='img'/>
              <p>9814104564</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <Link to='https://www.facebook.com/gurunanakcares/'>
                <img className="iconn" src={fb} alt='img'/>
              </Link>
              <Link to='https://www.instagram.com/gurunanakcares/'>
              <img className="iconn" src={inst} alt='img'/>
              </Link>
              <Link to='https://www.youtube.com/@GuruNanakCares'>
                <img className="iconn" src={yt2} alt='img'/>
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form ref={form} onSubmit={sendEmail} autoComplete="off">
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
    </div>
  )
}

export default ContactUs