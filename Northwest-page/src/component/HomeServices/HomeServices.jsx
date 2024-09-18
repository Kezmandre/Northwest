import React from "react";

const HomeServices = () => {
  return (
    <div className="p-0 m-0 bg-slate-200">
      <div className="w-[92%] pt-20 mx-auto">
        <div className="flex justify-between items-center pb-8 gap-8">
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
        <div className="flex justify-between items-center pb-8">
            <div className="w-[300px] h-[300px] bg-white shadow-2xl rounded-md">
                <div className="w-full h-[260px]">
                </div>
                <div className="p-6 bg-green-700"></div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
