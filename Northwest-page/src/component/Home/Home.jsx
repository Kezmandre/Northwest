import React from "react";
import Slider from "../Slider/Slider";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../HomeServices/HomeServices";
import HomeTeam from "../HomeTeam/HomeTeam";

const Home = () => {
  return (
    <div className="">
      <Slider />

      <HomeAbout />

      <HomeTeam />

      <HomeServices />
    </div>
  );
};

export default Home;
