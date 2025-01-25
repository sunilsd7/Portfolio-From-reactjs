import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className='px-5'>
      <div className='text-center my-10'>
        <span className='border-2 p-2 rounded-lg text-4xl'>Contact Me</span>
      </div>

    <div className='md:flex gap-32'>
      <div className='text-center md:ms-auto text-4xl'>
        <div>Connect with me</div>
        <div className="flex space-x-6 text-3xl mt-5 justify-center">
                    <a  href='https://github.com/sunilsd7' target='_blank'> <FaGithub/></a>
        
                    <a  href='https://www.facebook.com/sunildumre11' target='_blank'> <FaFacebook  /></a>
                    <a  href='https://github.com/sunilsd7' target='_blank'> <CiLinkedin /></a>
                    <a href="https://www.instagram.com/s.dsharma19/profilecard/?igsh=MWUyNzQ0MXRsNWQ4cA== "><CiInstagram/></a>
                    <a href="mailto:sumildumre555@gmail.com"> <CgMail/></a>
                  </div>
      </div>
      <div className='md:mx-auto'>
       <form className='pt-5  p-10' >
                            <input
                                className='w-[100%] py-2 px-1 bg-lowdark mb-3 placeholder:text-darkcolor rounded-[0.2rem]'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Name:'
                              
                              
                            />
                            <input
                                className='w-[100%] py-2 px-1 bg-lowdark mb-3 placeholder:text-darkcolor rounded-[0.2rem]'
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Email:'
                        
                            
                            />
                            <textarea
                                className='w-[100%] h-24 py-2 px-1 bg-lowdark placeholder:text-darkcolor rounded-[0.2rem]'
                                name="message"
                                id="message"
                                placeholder='Message:'
                               
                            />
                            <button
                                type='submit'
                                className="text-whitecolor bg-primarycolor mt-3 border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-8 py-2 rounded-[0.4rem] text-[1rem]"
                             
                            >
                                <span>Send</span>
                            </button>
                        </form>
                        </div>
    </div>
    </div>
  )
}

export default Contact
