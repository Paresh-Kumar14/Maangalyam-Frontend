import React from "react";
import { FaChevronDown } from "react-icons/fa6";

import text from "./assets/Layer_1.png";

const Navbar = () => {
  return (
    <nav className="bg-[#FFF7E6] p-2 md:px-12 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center justify-center md:justify-start">
        <img src={text} className="w-24 md:w-auto" alt="Logo" />
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <a
          href="#"
          className="text-black hover:text-yellow-500 hover:underline"
        >
          Home
        </a>
        <a
          href="#"
          className="text-black hover:text-yellow-500 hover:underline"
        >
          Plans
        </a>

        <div className="relative inline-block  text-left">
          <div className="inline-flex items-center justify-center w-full  rounded-md  bg-transparent px-4 py-2 text-sm font-medium text-gray-700   ">
            Dropdown
            <FaChevronDown className="mx-2" />
          </div>
        </div>
        <button
          type="button"
          className="bg-[#014225] text-white font-semibold py-2 px-4 rounded-lg "
        >
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
