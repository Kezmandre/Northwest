import React from "react";
import Slider from "../Slider/Slider";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div className="">
      <Slider />

      <HomeAbout />

      <HomeServices/>
    </div>
  );
};

export default Home;
