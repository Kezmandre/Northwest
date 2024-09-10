import React from "react";
import Logo from "../../component/Images/northwest_petroleum_logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#0B6A42]  overflow-hidden">
      <div className="w-[92%] mx-auto pb-6 pt-6 flex justify-between text-white font-Inter">
        <div className="w-[80px]">
          <img src={Logo} alt="" className="w-full" />
        </div>
        <div>
          <h5 className="pb-4">About Us</h5>
          <ul className="text-[12px] space-y-4 ">
            <li className="hover:text-[#719532]">
              <a href="">Mission and Vision</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Our Story</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Milestone</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Our Team</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="pb-4">Products</h5>
          <ul className="text-[12px] space-y-4">
            {" "}
            <li className="hover:text-[#719532]">
              <a href="">Premium Motor Spirit (PMS)</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Automotive Gas Oil (AGO)</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Household Kerosene (HHK)</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Lubricants And Chemical</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Liquefied Petroleum Gas (LPG) </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="pb-4">Services</h5>
          <ul className="text-[12px] space-y-4">
            {" "}
            <li className="hover:text-[#719532]">
              <a href="">Oil Trading</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Marine and Shipping</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Jetty services</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Terminal Operation</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Retail</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Gas</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Transport and Linguistics</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Lubricant and Additives</a>
            </li>
            <li>
              <a href="">Refinery</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Aviation</a>
            </li>
          </ul>
        </div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Footer;
