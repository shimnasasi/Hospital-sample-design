import React from "react";
import "./HomeGallery.css";
const HomeGallery = () => {
  return (
    <div className="homegallery">
      <div className="ourgallery">OUR GALLERY</div>
      <div className="camp">Our Medical Camp</div>
      <div className="gallery">
        <div className="images">
          <div className="first-col">
            <img
              className="galleryimg11"
              src="https://img.freepik.com/premium-photo/hospital-room-hd-wallpaper-photographic-image_993236-530.jpg"
              alt=""
            />
            <div className="row">
              <img
                className="galleryimg1"
                src="https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg"
                alt=""
              />
              <img
                className="galleryimg1"
                src="https://media.istockphoto.com/id/1460099874/photo/nurse-checking-on-a-patient.jpg?s=612x612&w=0&k=20&c=Nc1xxXBioaZDooQynLqPAcSAI5TPtBPd89D5XfwTCy0="
                alt=""
              />
            </div>
          </div>
          <div className="second-col">
            <div className="row">
              <img
                className="galleryimg1"
                src="https://media.istockphoto.com/id/1419092701/photo/little-girl-patient-embracing-female-nurse-at-hospital.jpg?s=612x612&w=0&k=20&c=CgDj8PFthsBUJHMpRPp30h82Z29HiDbZRv6KS5o4cTg="
                alt=""
              />
              <img
                className="galleryimg1"
                src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <img
              className="galleryimg11"
              src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
