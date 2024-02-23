// ImageSlider.js

import React from "react";
import "tailwindcss/tailwind.css";

import image_3 from "./assets/Group.png";
import image_4 from "./assets/pic1.png";
import pic6 from "./assets/pic6.png";
import img1 from "./assets/image 18.png";
import img2 from "./assets/image 22.png";
import { GoStarFill } from "react-icons/go"
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";

const ImageSlider = () => {
  const images = [
    "https://m.media-amazon.com/images/I/71snht4ZY+L._AC_UF1000,1000_QL80_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Crystal_Project_computer.png",
    "https://www.computerhope.com/jargon/c/computer-types.png",
    "https://static.javatpoint.com/definition/images/computer-definition.png",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const progressPercentage = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className="h-full w-full flex flex-col ">
      <div className="flex w-full h-40 justify-center p-6">
    <div className={`$[currentIndex]`}>
    <div className="flex">
    <div className="h-32 p-4  text-left flex flex-row items-center justify-start  rounded-lg bg-white-200">
    <img
      className="w-24 h-24 object-cover rounded-xl mr-4"
      src={img1}
      alt="Profile"
    />
    <div className="text-xs">
      <div className="flex gap-2 py-2 text-lg text-yellow-400">
      <GoStarFill />
      <GoStarFill />
      <GoStarFill />
      <GoStarFill />
      <GoStarFill />

      </div>
      <p className="text-gray-600 text-xs text-bold w-60 text-wrap">"We love Landingfolio! Our designers
       were using it for their projects, so we already knew what kind of design they want."</p>
      
      <p className="font-semibold py-2   text-gray-700">Raghu & Shwetha </p>
    </div>
  </div>
    <div className="h-32 p-4  text-left flex flex-row items-center justify-start  rounded-lg bg-white-200">
    <img
      className="w-24 h-24 object-cover rounded-xl mr-4"
      src={img2}
      alt="Profile"
    />
    <div className="text-xs">
      <div className="flex gap-2 py-2 text-lg text-yellow-400">
      <GoStarFill />
      <GoStarFill />
      <GoStarFill />
      <GoStarFill />
      <GoStarFill />

      </div>
      <p className="text-gray-600 text-xs text-bold w-60 text-wrap">"We love Landingfolio! Our designers
       were using it for their projects, so we already knew what kind of design they want."</p>
      
      <p className="font-semibold py-2   text-gray-700">Raghu & Shwetha </p>
    </div>
  </div>
    </div>
    </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-between w-96 ">
          <button
            className=" w-10 h-10 flex justify-center rounded-full items-center border shadow-md"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
          <div className=" flex items-center justify-center w-72 ">
            <div className="bg-gray-300 h-1 w-60 rounded">
              <div
                className="bg-yellow-500 h-full rounded"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <button
            className=" w-10 h-10 flex justify-center rounded-full items-center border shadow-md"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
