import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="medicalf">Medical</div>
      <div className="aboutpara">
        <div className="aboutf">About</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="footerl">
        <div className="numberf">+564 7883456554</div>
        <div className="emailf">youremail@gmail.com</div>
        <div>
        <input type="email" className="inputemail" placeholder="Email" />
        <button className="emailbutton">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
