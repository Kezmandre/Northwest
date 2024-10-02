import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const CorporatesSubNav = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <div className="flex justify-between gap-8 items-start w-full mt-8">
        <div className="w-[400px]">
          <h2 className="pb-4 pt-4 text-black">Corporates</h2>
          <p className="text-black text-[14px] text-justify font-normal">
            Our vast experience in the oil & gas industry has ensured we are
            able to meet up with the country&apos;s demand for petroleum
            products through trading, importation of refined products, storage
            and distribution of petroleum products across the country.
          </p>
        </div>
        <div className="hover:text-[#0B6A42]">
          <h2 className="pb-4 pt-4 text-black">Services</h2>
          <ul>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Oil Trading</li>
            </span>

            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Marine and Shipping</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Jetty Services</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Lubricants</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Terminal Operation</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Retail</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Gas</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Transport and Logistics</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Lubricant and additives</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Refinery</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Aviation</li>
            </span>
          </ul>
        </div>
        <div className="">
          <h2 className="pb-4 pt-4 text-black">Quality Certification</h2>
          <ul className="hover:text-[#0B6A42]">
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Quality Certification of Petroleum Products</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorporatesSubNav;
