import React from "react";
import "./OurDoctors.css";
import doctor1 from "../../assets/doctor1.jpg";
import doctor2 from '../../assets/doctor2.jpg';
import doctor3 from '../../assets/doctor3.jpg';

const OurDoctors = () => {
  return (
    <div className="specialist">
      <div className="ourdoctors">OUR DOCTORS</div>
      <h1>Our Specialist</h1>
      <div className="speciallistdoctors">
        <div>
          <img className="doctorimg" src={doctor1} alt="" />
          <div className="doctorbox">
            <div className="name">Alvin Maxwell</div>
            <div className="departmentt">Neuroanatomy</div>
          </div>
        </div>
        <div>
          <img className="doctorimg" src={doctor2} alt="" />
          <div className="doctorbox">
            <div className="name">Alvin Maxwell</div>
            <div className="departmentt">Neuroanatomy</div>
          </div>
        </div>
        <div>
          <img className="doctorimg" src={doctor3} alt="" />
          <div className="doctorbox">
            <div className="name">Alvin Maxwell</div>
            <div className="departmentt">Neuroanatomy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
