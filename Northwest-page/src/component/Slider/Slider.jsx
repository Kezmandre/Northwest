import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { sliderImage } from "../../assets/Data/SliderImages";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImage.length);
    setText(false);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderImage.length) % sliderImage.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className="m-0 p-0 relative w-full">
        <div className="relative">
        <div className="relative w-full h-[90vh] opacity-100 overflow-hidden">
        <img
          src={sliderImage[currentIndex].image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center   text-white font-extrabold text-6xl transition-all duration-700 ease-out ${
          text ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <p className="w-[80%]">
        {sliderImage[currentIndex].text}
        </p>
      </div>

      <button
        onClick={next}
        className=" absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-green-600 text-white p-2 rounded-full focus:outline-none"
      >
        <FaChevronRight />
      </button>
      <button
        onClick={previous}
        className=" absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-green-600 text-white p-2 rounded-full focus:outline-none"
      >
        <FaChevronLeft />
      </button>
        </div>
     
    </div>
  );
};

export default Slider;
