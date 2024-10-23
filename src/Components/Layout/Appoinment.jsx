import React from "react";
import "./Appoinment.css";
const Appoinment = () => {
  return (
    <div className="appoinment">
      <img
        className="appoimg"
        src="https://thumbs.dreamstime.com/b/people-doctor-nurse-hand-shake-boardroom-welcome-congratulations-internship-employees-office-happy-smile-335399008.jpg"
        alt=""
      />

      <div className="form">
        
        <div className="doctorForm">DOCTOR FORM</div>
        <div className="appoinmentform">Appoinment Form</div>
        <div className='twoinput'>
        <input type="text" className="input" placeholder="Name" />
        <input type="text" className="input" placeholder="Phone" />
        </div>
        <div className='twoinput'>
        <input type="text" className="input" placeholder="Email" />
        <input type="text" className="input" placeholder="Date" />
        </div>
        <div className='twoinput'>
        <input type="text" className="input" placeholder="Department" />
        <input type="text" className="input" placeholder="Doctor" />
        </div>
        <input type="text" className="input1" placeholder="Your Message" />
        <button className="appobutton">Submit</button>
      </div>
    </div>
  );
};

export default Appoinment;
