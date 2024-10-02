import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const RetailSubNav = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <div className="flex justify-between gap-8 items-start w-full mt-8">
        <div className="w-[400px]">
          <h2 className="pb-4 pt-4 text-black">Retail</h2>
          <p className="text-black text-[14px] text-justify font-normal">
            Whenever you require to refuel, our retail stations offer petroleum
            products with debit/credit card payment services that make it easy
            to fill up when you are on the go. Come to our Service Stations and
            experience unparalled service delivery.
          </p>
        </div>
        <div className="hover:text-[#0B6A42]">
          <h2 className="pb-4 pt-4 text-black">Products</h2>
          <ul>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Premium Motor Spirit (PMS)</li>
            </span>

            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Automotive Gas Oil (AGO)</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Household Kerosene (HKK)</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Lubricants</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Liquefied Petroleum Gas (LPG)</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4   font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Compressed Natural Gas (CNG)</li>
            </span>
          </ul>
        </div>
        <div className="">
          <h2 className="pb-4 pt-4 text-black">Our Loyalty Program</h2>
          <ul className="hover:text-[#0B6A42]">
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Loyalty Card</li>
            </span>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RetailSubNav;
