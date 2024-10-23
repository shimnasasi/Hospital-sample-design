import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import HomeAbout from "../Layout/HomeAbout";
import HomeService from "../Layout/HomeService";
import HomeGallery from "../Layout/HomeGallery";
import Appoinment from "../Layout/Appoinment";

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <HomeAbout />
        <HomeService />
        <HomeGallery />
        <Appoinment/>
      </Layout>
    </div>
  );
};

export default Home;
