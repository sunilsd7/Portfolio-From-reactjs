import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className='px-5 py-10 bg-gray-900 text-white'>
      {/* Title Section */}
      <div className='text-center my-10'>
        <h1 className='text-5xl font-bold border-b-4 border-primarycolor inline-block pb-2'>Contact Me</h1>
      </div>

      {/* Content Section */}
      <div className='md:flex gap-20 items-center justify-center'>
        {/* Social Links Section */}
        <div className='text-center text-4xl'>
          <h2 className='text-3xl font-semibold mb-5'>Connect with Me</h2>
          <div className="flex space-x-6 text-3xl mt-5 justify-center">
            <a href='https://github.com/sunilsd7' target='_blank' className="hover:text-primarycolor transition duration-300">
              <FaGithub />
            </a>
            <a href='https://www.facebook.com/sunildumre11' target='_blank' className="hover:text-primarycolor transition duration-300">
              <FaFacebook />
            </a>
            <a href='https://www.linkedin.com/in/sunil-dumre-447628238' target='_blank' className="hover:text-primarycolor transition duration-300">
              <CiLinkedin />
            </a>
            <a href="https://www.instagram.com/s.dsharma19/" target='_blank' className="hover:text-primarycolor transition duration-300">
              <CiInstagram />
            </a>
            <a href="mailto:sumildumre555@gmail.com" className="hover:text-primarycolor transition duration-300">
              <CgMail />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='w-full max-w-md  rounded-lg shadow-lg p-8'>
          <form>
            <div className='mb-4'>
              <input
                className='w-full py-2 px-3 bg-gray-700 text-white  rounded focus:outline-none focus:ring-2 focus:ring-primarycolor'
                type="text"
                name="name"
                id="name"
                placeholder='Your Name'
              />
            </div>
            <div className='mb-4'>
              <input
                className='w-full py-2 px-3 bg-gray-700 text-white  rounded focus:outline-none focus:ring-2 focus:ring-primarycolor'
                type="email"
                name="email"
                id="email"
                placeholder='Your Email'
              />
            </div>
            <div className='mb-4'>
              <textarea
                className='w-full py-2 px-3 bg-gray-700 text-white  rounded focus:outline-none focus:ring-2 focus:ring-primarycolor'
                name="message"
                id="message"
                placeholder='Your Message'
                rows="4"
              ></textarea>
            </div>
            <button
              type='submit'
              className="w-full bg-blue  text-white py-2 rounded font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
