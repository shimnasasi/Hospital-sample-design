import React from "react";
import Layout from "../Layout/Layout";
import HomeAbout from "../Layout/HomeAbout";
import OurDoctors from "../Layout/OurDoctors";
import AboutBox from "../Layout/AboutBox";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutBox />
        <HomeAbout/>
        <OurDoctors />
      </Layout>
    </div>
  );
};

export default About;
