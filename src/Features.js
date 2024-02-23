import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { GoShieldLock } from "react-icons/go";
import { PiWechatLogo } from "react-icons/pi";
import { TbUserStar } from "react-icons/tb";

const Features = () => {
  return (
    <div className="mx-28 my-10">
    <div className="flex flex-col">
<div className="text-sm mb-4 text-yellow-400">Feature Highlights</div>
<div className="flex justify-center w-28"></div>
        <div className="text-2xl font-semibold">Unveiling the Heart of Our Platform</div>
        <div className="flex-grow">Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.</div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="grid-item flex text-left flex-col gap-2">
          <span className="bg-[#FFB0001A] rounded-full p-4 w-12 text-yellow-400">
            <FaUserCircle />
          </span>
          <div className="font-semibold">
            Precision Matchmaking at Your Fingertips
          </div>
          <div className="text-left text-sm">
            Experience matchmaking like never before. Our platform employs
            sophisticated algorithms and detailed criteria to ensure you connect
            with individuals who share your values, interests, and aspirations.
            Take the first step towards a meaningful relationship with our
            precision matchmaking features.
          </div>
        </div>
        <div className="grid-item flex text-left flex-col gap-2">
          <span className="bg-[#FFB0001A] rounded-full p-4 w-12 text-yellow-400">
            <BsShieldCheck />
          </span>
          <div className="font-semibold">
            Verified Profiles for Trusted Connections
          </div>
          <div className="text-left text-sm">
            Your safety is our priority. Every profile on our platform undergoes
            a rigorous verification process, providing you with the assurance
            that you are connecting with genuine, like-minded individuals. Build
            meaningful connections with confidence through our verified
            profiles.
          </div>
        </div>
        <div className="grid-item flex text-left flex-col gap-2">
          <span className="bg-[#FFB0001A] rounded-full p-4 w-12 text-yellow-400">
            <BiSearchAlt />
          </span>
          <div className="font-semibold">Tailored Search, Tailored Results</div>
          <div className="text-left text-sm">
            Customize your search for love with our comprehensive filter
            options. Whether it's age, location, or interests, our tailored
            search feature allows you to fine-tune your preferences, ensuring
            that every match aligns with your unique criteria.
          </div>
        </div>
        <div className="grid-item flex text-left flex-col gap-2">
          <span className="bg-[#FFB0001A] rounded-full p-4 w-12 text-yellow-400">
            <FaUserCircle />
          </span>
          <div className="font-semibold">Success Stories That Inspire</div>
          <div className="text-left text-sm">
            Join the ranks of those who found love on our platform. Explore
            real-life success stories and testimonials from couples who embarked
            on their journey with us. Let their stories inspire and reassure you
            that your perfect match may be just a click away.
          </div>
        </div>
        <div className="grid-item flex text-left flex-col gap-2">
          <span className="bg-[#FFB0001A] rounded-full p-4 w-12 text-yellow-400">
            <GoShieldLock />
          </span>
          <div className="font-semibold">Your Privacy, Your Control</div>
          <div className="text-left text-sm">
            Take charge of your online journey with our robust privacy controls.
            Manage who sees your profile and choose the level of information you
            share. Your privacy is paramount, and we give you the tools to
            navigate your matrimony search on your terms.
          </div>
        </div>
        <div className="grid-item flex text-left flex-col gap-2">
          <span className="bg-[#FFB0001A] rounded-full p-4 w-12 text-yellow-400">
            <PiWechatLogo />
          </span>
          <div className="font-semibold">
            Stay Connected with Seamless Messaging
          </div>
          <div className="text-left text-sm">
            Communication is key, and we've made it easier than ever. Our
            intuitive messaging platform lets you connect effortlessly with
            potential matches. From icebreakers to heartfelt conversations,
            foster connections with ease and grace.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
