import React from "react";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="homeabout">
      <div className="about">
        <div className="company">ABOUT OUR COMPANY</div>
        <div className="welcome">Welcome To Our Hospital</div>
        <p>
          There arge many variations ohf pacgssages of sorem gpsum ilable, but
          the majority have suffered alteration in some form, by ected humour,
          or randomised words whi.
        </p>
        <button className="button1">Find Doctors</button>
        <button className="button1">Appoinment</button>
        <button className="button1">Emergency</button>
      </div>
      <img
        className="image"
        src="https://thumbs.dreamstime.com/b/medical-team-29223949.jpg"
        alt=""
      />
    </div>
  );
};

export default HomeAbout;
