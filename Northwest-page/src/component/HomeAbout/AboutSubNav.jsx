import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const AboutSubNav = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <div className="flex justify-between gap-8 items-start w-full mt-8">
        <div className="w-[400px]">
          <h2 className="pb-4 text-black">About Us</h2>
          <p className="text-black text-[14px] text-justify font-normal">
            We are an indigenous petroleum products marketing company with vast
            experience in the export, import, trading, storage and supply of
            crude oil and refined petroleum products
          </p>
        </div>
        <div className="hover:text-[#0B6A42]">
          <h2 className="pb-4 text-black">Company Profile</h2>
          <ul>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Mission and Vision</li>
            </span>

            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Our Story</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px]   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Our Milestone</li>
            </span>
          </ul>
        </div>
        <div className="">
          <h2 className="pb-4 text-black">Management</h2>
          <ul className="hover:text-[#0B6A42]">
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Our Team</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>HSE Commitment</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSubNav;
