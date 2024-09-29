import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const AboutSubNav = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <div className="flex justify-start gap-8 items-start w-full mt-8">
        <div className="w-[400px]">
          <h2 className="pb-4 text-black">About Us</h2>
          <p className="text-black text-[14px] text-justify font-normal">
            We are an indigenous petroleum products marketing company with vast
            experience in the export, import, trading, storage and supply of
            crude oil and refined petroleum products
          </p>
        </div>
        <div className="">
          <h2 className="pb-4">Company Profile</h2>
          <ul>
            <span className="flex justify-center text-black text-[14px]  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Premium Motor Spirit (PMS)</li>
            </span>
          </ul>
        </div>
        <div className="">
          <h2>Management</h2>
          <p>Our Team</p>
          <h2>HSE Management</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutSubNav;
