import React from 'react';

import MyImage from '../assets/Myprofile.png';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative   md:flex px-5  ">
    
      <div className="md:w-1/2 lg:w-2/5  flex items-center ">
        <div className=" font-bold text-xl  md:text-2xl  lg:text-4xl md:ms-auto ">
        <div className=''>
        <span className=" md:tracking-widest "> Hi I'm,</span>
          <h1 > Sunil Dumre Sharma</h1>
          <p className="text-lg text-gray-600 mb-6">
            Front-end Developer
          </p></div>
          <div className="flex space-x-6 text-3xl">
            <a  href='https://github.com/sunilsd7' target='_blank'> <FaGithub/></a>

            <a  href='https://www.facebook.com/sunildumre11' target='_blank'> <FaFacebook  /></a>
            <a  href='`https://www.linkedin.com/in/sunil-dumre' target='_blank'> <CiLinkedin /></a>
          </div>
        </div>
      </div>


      <div className="md:relative w-full flex items-center justify-center overflow-hidden md:bg-white clip-left">
        <img
          src={MyImage}
          alt="image"
          className="md:w-1/2 md:h-auto px-10"
        />
      
      </div>
    </div>
  );
};

export default HeroSection;
