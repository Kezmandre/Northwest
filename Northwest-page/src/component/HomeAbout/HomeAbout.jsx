import React from "react";
import north_product from "../Images/north_vessel.jpeg";
import north_plant from "../Images/north_plant.jpeg";

const HomeAbout = () => {
  return (
    <div className="p-0 m-0 bg-slate-100">
      <div className="w-[92%] pt-10 pb-8 mx-auto">
        <div className="flex justify-between items-center gap-6">
          <div className="w-1/2">
            <h2 className="text-[#0B6A42] text-xl font-semibold font-Poppins">
              Northwest Oil and Gas
            </h2>
            <i>More than you expect</i>

            <h1 className="font-bold font-Poppins text-2xl pt-4">
              We are a Leading Force In The Downstream Oil and Gas Industry in
              Nigeria
            </h1>
            <p className="pt-4 font-Roboto tracking-wider text-justify">
              Northwest Petroleum & Gas Company Ltd was created from humble
              beginnings in 1998 with a vision to earn a reputable name in
              Nigeria&apos;s Oil and Gas industry by being measurably efficient,
              responsible and competitive while working to meet Company growth
              and objectives within the broader Social and Economic goals of our
              operating environment.
            </p>
            <p className="pt-4 pb-4 font-Roboto tracking-wider text-justify">
              From those early days to date, we have worked very hard to realize
              our mission to operate an efficient and technically competent Oil
              and Gas Company in a safe, professional and socially responsible
              manner.......
            </p>
            <button className="p-2 outline-none text-white font-Urbanist  bg-[#0B6A42] hover:bg-green-600 transition-all  rounded-lg">
              More About Us
            </button>
          </div>
          <div className="w-1/2 flex justify-center   gap-4 items-center">
            <div className=" w-1/2 h-[400px]">
              <div className=" h-[370px]">
                <img src={north_product} alt="" className="w-full h-full" />
              </div>
              <div className="p-4 text-white font-Urbanist text-[15px] text-center bg-[#0B6A42]">Petroleum Product Importation</div>
            </div>
            <div className=" w-1/2 h-[400px]">
              <div className=" h-[370px]">
                <img src={north_plant} alt="" className="w-full h-full" />
              </div>
              <div className="p-4 text-white font-Urbanist text-[15px] text-center bg-[#0B6A42]"> Lubricant Production and Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
