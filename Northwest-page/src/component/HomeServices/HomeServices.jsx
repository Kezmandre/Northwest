import React from "react";
import { ServicesData } from "../../assets/Data/ServicesData";

const HomeServices = () => {
  return (
    <div className="p-0 m-0 bg-slate-200">
      <div className="w-[90%] pt-20 mx-auto">
        <div className="flex justify-between items-center pb-12 gap-8">
          <div className="w-[40%]">
            <h2 className="font-Poppins text-lg font-semibold pb-4 text-[#0B6A42]">
              Northwest Services
            </h2>
            <p className="text-3xl font-bold font-Poppins">What We Do</p>
          </div>
          <div className="w-[60%]">
            <p className="font-Urbanist tracking-wide">
              We are an indigenous petroleum products marketing company with
              vast experience in the export, import, trading, storage and supply
              of crude oil and refined petroleum products.Our vast experience in
              the oil & gas industry has ensured we are able to meet up with the
              country&apos;s demand for petroleum products through trading,
              importation of refined products, storage and distribution of
              petroleum products across the country.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 items-center flex-wrap pb-12">
          {ServicesData?.map((item) => {
            return (
              <div
                key={item.id}
                className=" relative w-[260px] h-[300px] bg-white shadow-2xl rounded-md  overflow-hidden group"
              >
                <div className="absolute text-white font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10">
                  <a href=""><i>Show more</i></a>
                </div>
                <div className=" relative w-full h-[260px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-95"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                </div>
                <div className="p-3 text-white text-[12px] font-Poppins text-center bg-[#0B6A42]">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
