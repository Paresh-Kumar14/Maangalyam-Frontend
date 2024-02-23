import React from "react";


import Group from "./assets/Group.png";
const Header = () => {
  return (

    <div className="relative flex flex-col items-center justify-center">
    <div className="text-center p-8 rounded-lg ">
      <h1 className="text-yellow-500 text-3xl font-bold mb-4">
        Maangalyam: Where Love Finds its Forever
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Discover Endless Possibilities in Your Matrimony Journey
      </p>
      <button className="bg-[#014225] sticky z-[9999] text-white rounded-full px-8 py-3 hover:bg-green-600 transition duration-300">
        Start Your Journey
      </button>
    </div> 
  
    <div className="bg-gray-800 z-20 text-white p-8 rounded-lg shadow-md mt-8 max-w-xl">
      <h1 className="text-3xl mb-6 font-semibold">Main Heading</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="lookingFor" className="block mb-1">
              Looking for
            </label>
            <select
              id="lookingFor"
              className="p-3 w-full bg-white-700 text-gray-400  text-sm rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
            >
              <option>Male or Female</option>
            </select>
          </div>
  
          <div>
            <label htmlFor="age" className="block mb-1">
              Age
            </label>
            <select
              id="age"
              className="p-3 w-full bg-white-700 text-gray-400  text-sm rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
            >
              <option>Select Age</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="religion" className="block mb-1">
              Religion
            </label>
            <select
              id="religion"
              className="p-3 w-full bg-white-700 text-gray-400  text-sm rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
            >
              <option>Choose Religion</option>
            </select>
          </div>
  
          <div>
            <label htmlFor="motherTongue" className="block mb-1">
              Mother Tongue
            </label>
            <select
              id="motherTongue"
              className="p-3 w-full bg-white-700 text-gray-400 text-sm rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
            >
              <option>Choose Mother Tongue</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-black px-8 py-3 rounded hover:bg-yellow-400 transition duration-300"
        >
          Search (CTA)
        </button>
      </form>
    </div>
  
    <div className=" w-full -mt-64">
    <img src={Group} alt="" className="h-58 w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-90"></div>
  </div>
  
  </div>
  
  );
};

export default Header;
