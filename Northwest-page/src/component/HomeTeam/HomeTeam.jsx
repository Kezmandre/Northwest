import React from "react";
import { TeamData } from "../../assets/Data/TeamData";

const HomeTeam = () => {
  return (
    <div className="p-0 m-0 bg-[#0B6A42]">
      <div className="w-[90%] mx-auto pt-10 pb-6 ">
        <h2 className="text-center font-semibold text-white text-[30px] font-Inter  pb-2">
          Meet <span className="italic text-[20px]">the</span> Team
        </h2>
        <p className="text-center text-white pb-6">
          Get to meet the amazing people responsible for making the magic happen
        </p>
        <p className=" pb-6 text-center text-white font-Urbanist">
          The success of our business does not lie solely on machinery. We have
          utmost confidence in our people. These are the people who had a vision
          for Northwest Petroleum and those who continue to work tirelessly to
          make that vision a reality. Leading the way and keeping us true to
          that vision, our Management team is highly qualified and motivated,
          with years of collective experience in the petroleum industry.
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap pt-4 pb-6">
          {TeamData?.map((item) => (
            <div key={item.id} className="w-[270px]">
              <div className="w-[200px] h-[200px] mx-auto rounded-full bg-white ">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-center text-white pb-2 font-semibold">{item.name}</p>
              <p className="text-center text-white italic">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
