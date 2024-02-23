import React from "react";

const Register = () => {
  return (
    <div className="mx-28 my-10">
      <div className="flex flex-col">
        <div className="text-sm font-semibold mb-4 text-[#FFB000]">
          Join Us Today
        </div>
        <div className="flex justify-center w-28"></div>
        <div className="text-3xl font-bold">
          Your Journey to Love Starts Here
        </div>
        <div className="flex-grow mx-80 text-semibold">
          Unlock the Door to Love: Register Now for a Journey of Connections and
          Compatibility.
        </div>
      </div>
      <div className="max-w-md mx-auto  mt-8">
        <form className="space-y-4 ">
          <div className="flex space-x-2">
            <div className="max-w-sm mx-auto w-full  bg-white rounded-xl  shadow-md flex items-center space-x-4">
              <form>
                <div className="flex">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Profile
                    </label>
                    <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Raghav</option>
                    </select>
                    <label className="block text-sm font-medium text-gray-700 mt-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-1 block w-full py2 px3 border border-gray300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo500 focus:border-indigo500 sm:text-sm"
                    />
                    <label className="block text-sm font-medium text-gray-700 mt-3">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="IN +91-"
                      className="mt-1 block w-full py2 px3 border border-gray300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo500 focus:border-indigo500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mt-3">
                      Gender
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-1 block w-full py2 px3 border border-gray300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo500 focus:border-indigo500 sm:text-sm"
                    />
                    <label className="block text-sm font-medium text-gray-700 mt-3">
                      Second Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-1 block w-full py2 px3 border border-gray300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo500 focus:border-indigo500 sm:text-sm"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button
            type="submit"
            className="w-60  py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-yellow-400 hover:bg-blue-700 focus:outline-none "
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
