import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const CsrSubNav = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <div className="flex justify-evenly gap-8 items-start w-full mt-8">
        <div className="w-[400px]">
          <h2 className="pb-4 pt-4 text-black">Our Philosophy</h2>
          <p className="text-black text-[14px] text-justify font-normal">
            Our Company has a deep passion for Corporate Social Responsibility
            (CSR) both to our host communities and the nation at large. Our
            records in these areas are unassailable. We are involved in the
            establishment of schools, provision of health and safety services,
            childcare and women empowerment. Click here
          </p>
        </div>
        <div className="hover:text-[#0B6A42]">
          <h2 className="pb-4 pt-4 text-black">Services</h2>
          <ul>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] mb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Education</li>
            </span>

            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Security</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Humanitarian</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Other Initiatives</li>
            </span>
            <span className="flex justify-start text-black hover:text-[#0B6A42] text-[14px] pb-4  font-normal items-center gap-2">
              {" "}
              <TiArrowSortedUp />
              <li>Community Relations</li>
            </span>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default CsrSubNav;
