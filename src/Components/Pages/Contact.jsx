import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
// import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="contact">Contact</div>
        <div className="boxes">
          <div className="contactbox">
            <FaLocationDot className="contacticons" />
            <div>
              <div className="address">Address</div>
              <div>123 Street, New York, USA</div>
            </div>
          </div>
          <div className="contactbox">
            <MdCall className="contacticons" />
            <div>
              <div className="address">Call Us Now</div>
              <div>+012 345 6789</div>
            </div>
          </div>
          <div className="contactbox">
            <MdOutlineMailOutline className="contacticons" />

            <div>
              <div className="address">Mail Us Now</div>
              <div>name@domain.com</div>
            </div>
          </div>
        </div>
        <div className="formmap">
        <div className="form-container1">
          <h1>Contact Us</h1>
          <input type="text" className="contactinput" placeholder="Name" />
          <input
            type="text"
            className="contactinput"
            placeholder="Your Email"
          />
          <input type="text" className="contactinput" placeholder="Subject" />
          <input type="text" className="contactmsg" placeholder="Message" />
          <button className="sendbutton">Send Message</button>
        </div>
        <iframe
          className="contactmap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28869.20654219566!2d55.32138294122001!3d25.248683374207236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0693260e69%3A0xe695d4007a48eee9!2sDubai%20International%20Airport!5e0!3m2!1sen!2sin!4v1729590960911!5m2!1sen!2sin"
        ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
