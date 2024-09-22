import React from "react";
import { MdLocationOn,MdEmail } from "react-icons/md";
import { BsFillTelephoneOutboundFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import Logo from "../../component/Images/northwest_petroleum_logo.png";

const Footer = () => {

  const date = new Date()
  return (
    <>
    <div className="w-full bg-[#0B6A42]  overflow-hidden">
      <div className="w-[90%] mx-auto pb-6 pt-6 flex-col lg:flex-row flex justify-between items-start text-white font-Inter">
        <div className="w-[80px] mb-8 lg:mb-0">
          <img src={Logo} alt="" className="w-full" />
        </div>
        <div>
          <h5 className="pb-4">About Us</h5>
          <ul className="text-[12px] font-semibold space-y-4 ">
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
          <h5 className="pb-4 mt-8 lg:mt-0">Products</h5>
          <ul className="text-[12px] font-semibold space-y-4">
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
          <h5 className="pb-4 mt-8 lg:mt-0">Services</h5>
          <ul className="text-[12px] font-semibold space-y-4">
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
            <li className="hover:text-[#719532]">
              <a href="">Refinery</a>
            </li>
            <li className="hover:text-[#719532]">
              <a href="">Aviation</a>
            </li>
          </ul>
        </div>
        <div className="max-w-[350px] mt-8 lg:mt-0">
          Contact Us
          <div className="flex justify-start items-center space-x-3 mt-4">
            <MdLocationOn className="text-white" />
            <span className="text-[12px] font-semibold">
              Plot 202, Etim Inyang Crescent, Victoria Island, Lagos.
            </span>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <BsFillTelephoneOutboundFill className="text-[12px]" />
            <span className="text-[12px] font-semibold">
              +234 1 2716597, 4619698, 2806870-1 Fax: 01 2703042
            </span>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <MdLocationOn className="text-white" />
            <span className="text-[12px] font-semibold">
              Calabar Free Trade Zone, Calabar, Cross River State, Nigeria.
            </span>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <BsFillTelephoneOutboundFill className="text-[14px]" />
            <span className="text-[12px] font-semibold">Tel: +234 70 3900 4000</span>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <MdLocationOn className="text-white" />
            <span className="text-[14px] font-semibold">
              1, Tennessee Crescent, Maitama, Abuja.
            </span>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <BsFillTelephoneOutboundFill className="text-[12px] font-semibold" />
            <span className="text-[12px] font-semibold">+234 8022500500</span>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <MdEmail className="text-[12px] font-semibold" />
            <a href="mailto:hr@northwestpetroleum-ng.com" className="text-[12px] font-semibold">hr@northwestpetroleum-ng.com</a>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <MdEmail className="text-[12px] font-semibold" />
            <a href="mailto:wecare@northwestpetroleum-ng.com"  className="text-[12px] font-semibold" >wecare@northwestpetroleum-ng.com</a>
          </div>
          <div className="flex justify-start items-center space-x-3 mt-4">
            <MdEmail className="text-[12px] font-semibold" />
            <a href="mailto:info@northwestpetroleum-ng.com"  className="text-[12px] font-semibold">info@northwestpetroleum-ng.com</a>
          </div>
          <div className=" flex justify-start items-center gap-4 mt-6">
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
              <a href="https://web.facebook.com/northwestpetroleumgas/?_rdc=1&_rdr">
                <FaFacebookF className="text-[#0B6A42]" />
              </a>
            </div>
            <div className=" flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
              <a href="https://x.com/northwestpetgas?t=oWOQsBnleyN_vfFlNYHP2Q&s=08">
                <BsTwitterX className="text-[#0B6A42]" />
              </a>
            </div>
            <div className=" flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
              <a href="https://www.linkedin.com/company/northwest-petroleum-&-gas-co.-ltd/?originalSubdomain=ng">
                <FaLinkedinIn className="text-[#0B6A42]" />
              </a>
            </div>
            <div className=" flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
              <a href="https://www.instagram.com/northwestpetroleumgas/?hl=en">
                <FaInstagramSquare className="text-[#0B6A42]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white p-8">
      <div className="w-[92%] mx-auto font-Poppins text-center lg:text-start text-[#0B6A42]">
        <span>Copyright &copy; {date.getFullYear()} | Northwest Oil and Gas</span>
      </div>
    </div>
    </>
  );
};

export default Footer;
