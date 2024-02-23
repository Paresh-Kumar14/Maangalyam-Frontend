import React from "react";
import logo from "./assets/Layer_1.png"
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 px-2 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">
            <img src={logo}  />
            </span>
          </a>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/2 md:w-1/2 w-full flex px-4">
          <div className="mx-4">
          <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
            COMPANY
          </h2>
          <nav className="list-none mb-10">
          <ul>
          <li>
          <a className="text-gray-900 py-2 hover:text-yellow-500 ">
            About
          </a>
        </li>
        <li>
          <a className="text-gray-900 py-2 hover:text-yellow-500 ">
            Features
          </a>
        </li>
        <li>
          <a className="text-gray-900 py-2 hover:text-yellow-500 ">
            Contact Us
          </a>
        </li>
        <li>
          <a className="text-gray-900 py-2 hover:text-yellow-500 ">
            Career
          </a>
        </li>
          </ul>
           
          </nav>
        </div>
        
            <div>
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                HELP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-900 hover:text-yellow-500">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-yellow-500">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-yellow-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-yellow-500">
                    Privacy and Policy
                  </a>
                </li>
              </nav>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 w-full px-24">
            <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  id="footer-field"
                  name="footer-field"
                  className="  bg-gray-100 rounded-md w-60 border mb-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 w-60 inline-flex justify-center  text-white bg-[#FFB000] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-[#F6F6F5] ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 Mangalyaam — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
