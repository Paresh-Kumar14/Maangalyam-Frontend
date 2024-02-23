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
      <div className="flex justify-center items-center w-full">
  <div className="flex flex-col w-[800px] items-center mt-8">
    <form className="grid grid-cols-2 w-full text-left gap-2">
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="profile"
          className="block text-sm font-medium text-gray-700"
        >
          Profile
        </label>
        <select
          id="profile"
          name="profile"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Raghav</option>
        </select>
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Your gender"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Your name"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="secondName"
          className="block text-sm font-medium text-gray-700"
        >
          Second Name
        </label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          placeholder="Your second name"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="IN +91-"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </form>
    <button
      type="submit"
      className="w-60 mt-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-yellow-400 hover:bg-blue-700 focus:outline-none"
    >
      Get Started
    </button>
  </div>
</div>

    </div>
  );
};

export default Register;
