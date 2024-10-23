import React from "react";
import "./HomeService.css";

const HomeService = () => {
  return (
    <div className="homeservice">
      <div className="department">OUR DEPARTMENTS</div>
      <div className="services">Our Medical Services</div>
      <div className="servicebox">
        <div className="box">
          <img
            className="img1"
            src="https://e7.pngegg.com/pngimages/770/98/png-clipart-protect-teeth-protection-health.png"
            alt=""
          />
          Dentistry
        </div>
        <div className="box">
          <img
            className="img1"
            src="https://e7.pngegg.com/pngimages/524/944/png-clipart-computer-icons-heart-cardiology-cardiovascular-disease-drawing-cardiology-miscellaneous-logo.png"
            alt=""
          />
          Cardiology
        </div>
        <div className="box">
          <img
            className="img1"
            src="https://scentmed.com/wp-content/uploads/2023/01/icon6-e1519640573560.png"
            alt=""
          />
          ENT Specialists
        </div>
        <div className="box">Astrology</div>
        <div className="box">
          <img
            className="img1"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/brain-8295755-6881650.png"
            alt=""
          />
          Neuroanatomy
        </div>
        <div className="box">
          <img
            className="img1"
            src="https://banner2.cleanpng.com/20201209/csf/transparent-blood-icon-health-care-icon-blood-test-icon-5fd17283442697.8482804816075618592792.jpg"
            alt=""
          />
          Blood Screening
        </div>
      </div>
      <div className="service">
        <div className="servicepara">
          <h3>Dentist with surgical mask holding scaler near patient</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <button className="serviceappobutton">Appoinment</button>
        </div>
        <img
          className="serviceparaimg"
          src="https://wallpapers.com/images/featured/doctor-pictures-fw5jqfr08f959exs.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeService;
