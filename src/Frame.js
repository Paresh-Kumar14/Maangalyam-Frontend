import React from "react";
import person from "./assets/person.png";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic6 from "./assets/pic6.png";
import LOGO_2 from "./assets/LOGO_2.png";
import { CiSearch } from "react-icons/ci";
const Frame = () => {
  return (
    <div className="mx-24">
      <div className=" text-black p-10">
        <div className="text-3xl font-bold text-[#FFB000] mb-4">
          Discover Your Perfect Match with Our Powerful Features
        </div>
        <div className="align-middle text-sm text-center mx-28 font-weight">
          Unlock a world of possibilities with our cutting-edge features
          designed to make your journey to finding love seamless and enjoyable.
          From advanced search options to privacy controls, explore the tools
          that set us apart and maximize your chances of meeting your ideal life
          partner.
        </div>
      </div>
      <nav className="bg-[#F0F0F0] p-4 flex justify-between items-center rounded-md">
       
        <div className="flex items-center relative">
          <img src={LOGO_2} alt="Logo" className="h-10 mr-2" />
          <input
          type="text"
          placeholder="Type to search"
          className="px-2 py-1 bg-white-700 text-white border w-96   border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
          
          
        </div>

        
        <div className="flex items-center">
         <img src={person} className="h-10 mr-2" />
        </div>
      </nav>
      <div className="flex my-10">
        <div className="w-1/3 border rounded-lg">
          <div className=" p-4 bg-[#FFF7E6]">Advance Search</div>
          <div className="mb-4 mx-6 ">
            <h4 className="text-lg font-semibold mb-2 text-left text-[#FFB000] ">
              Basic Details
            </h4>
            <select className="w-full px-3 py-2 border rounded-md">
              <option value="18-22">18–22</option>
            </select>
            <label
              className="block text-gray-700 text-sm text-left font-semibold mb-2"
              htmlFor="age"
            >
              Height
            </label>
            <input
              type="text"
              placeholder="4’7” - 5’2”"
              className="shadow appearance-none placeholder-black  border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 mx-6">
            <h4 className="text-lg font-semibold mb-2 text-[#FFB000] text-left">
              Caste & Religion Details
            </h4>
            <label
              className="block text-gray-700 text-sm text-left font-bold mb-2"
              htmlFor="religion"
            >
              Religion
            </label>
            <input
              className="shadow appearance-none border  placeholder-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="religion"
              type="text"
              placeholder="Christian"
            />
            <label
              className="block text-gray-700 text-sm text-left font-bold mb-2"
              htmlFor="religion"
            >
              Caste
            </label>
            <input
              className="shadow appearance-none border  placeholder-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="religion"
              type="text"
              placeholder="Caste"
            />
            <label
              className="block text-gray-700 text-sm text-left font-bold mb-2"
              htmlFor="religion"
            >
              Sub-Caste
            </label>
            <input
              className="shadow appearance-none border  placeholder-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="religion"
              type="text"
              placeholder="Sub-Caste"
            />
          </div>
          <button
            className="bg-[#FFB000] hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            View more
          </button>
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div className="flex flex-col justify-start ">
            <h1 className="font-bold flex justify-start mx-5 pb-4 ">Based on your prefference</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
              <div className="h-32 p-4  text-left flex flex-row items-center justify-start shadow-md rounded-lg bg-white-200">
                <img
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                  src={pic1}
                  alt="Profile"
                />
                <div className="text-xs">
                  <div className="font-semibold text-lg text-gray-800">
                    Sravani Reddykonda
                  </div>
                  <p className="text-gray-600">26 yrs | 5ft 6in</p>
                  <p className="text-gray-600">Phn - 91277</p>
                  <p className="text-gray-600">Mail - sravani@gmail.com</p>
                  <p className="text-gray-600">Caste -</p>
                  <p className="font-semibold text-gray-700">Occupation -</p>
                </div>
              </div>
              <div className="h-32  p-4 text-left flex flex-row items-center justify-start shadow-md rounded-lg bg-white-200">
                <img
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                  src={pic2}
                  alt="Profile"
                />
                <div className="text-xs">
                  <div className="font-semibold text-lg text-gray-800">
                    Sravani Reddykonda
                  </div>
                  <p className="text-gray-600">26 yrs | 5ft 6in</p>
                  <p className="text-gray-600">Phn - 91277</p>
                  <p className="text-gray-600">Mail - sravani@gmail.com</p>
                  <p className="text-gray-600">Caste -</p>
                  <p className="font-semibold text-gray-700">Occupation -</p>
                </div>
              </div>
              <div className="h-32 p-4  text-left flex flex-row items-center justify-start shadow-md rounded-lg bg-white-200">
                <img
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                  src={pic3}
                  alt="Profile"
                />
                <div className="text-xs">
                  <div className="font-semibold text-lg text-gray-800">
                    Sravani Reddykonda
                  </div>
                  <p className="text-gray-600">26 yrs | 5ft 6in</p>
                  <p className="text-gray-600">Phn - 91277</p>
                  <p className="text-gray-600">Mail - sravani@gmail.com</p>
                  <p className="text-gray-600">Caste -</p>
                  <p className="font-semibold text-gray-700">Occupation -</p>
                </div>
              </div>
              <div className="h-32 p-4  text-left flex flex-row items-center justify-start shadow-md rounded-lg bg-white-200">
                <img
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                  src={pic4}
                  alt="Profile"
                />
                <div className="text-xs">
                  <div className="font-semibold text-lg text-gray-800">
                    Sravani Reddykonda
                  </div>
                  <p className="text-gray-600">26 yrs | 5ft 6in</p>
                  <p className="text-gray-600">Phn - 91277</p>
                  <p className="text-gray-600">Mail - sravani@gmail.com</p>
                  <p className="text-gray-600">Caste -</p>
                  <p className="font-semibold text-gray-700">Occupation -</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col justify-start ">
            <h1 className="font-bold flex justify-start mx-5 py-5">Based on your prefference</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
              
             
              <div className="h-32 p-4  text-left flex flex-row items-center justify-start shadow-md rounded-lg bg-white-200">
                <img
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                  src={pic5}
                  alt="Profile"
                />
                <div className="text-xs">
                  <div className="font-semibold text-lg text-gray-800">
                    Sravani Reddykonda
                  </div>
                  <p className="text-gray-600">26 yrs | 5ft 6in</p>
                  <p className="text-gray-600">Phn - 91277</p>
                  <p className="text-gray-600">Mail - sravani@gmail.com</p>
                  <p className="text-gray-600">Caste -</p>
                  <p className="font-semibold text-gray-700">Occupation -</p>
                </div>
              </div>
              <div className="h-32 p-4  text-left flex flex-row items-center justify-start shadow-md rounded-lg bg-white-200">
                <img
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                  src={pic6}
                  alt="Profile"
                />
                <div className="text-xs">
                  <div className="font-semibold text-lg text-gray-800">
                    Sravani Reddykonda
                  </div>
                  <p className="text-gray-600">26 yrs | 5ft 6in</p>
                  <p className="text-gray-600">Phn - 91277</p>
                  <p className="text-gray-600">Mail - sravani@gmail.com</p>
                  <p className="text-gray-600">Caste -</p>
                  <p className="font-semibold text-gray-700">Occupation -</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
