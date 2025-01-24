import React from 'react'
import { FaUser } from "react-icons/fa";
import WebImage from '../assets/webdevelopment.png'

const AboutMe = () => {
  return (
    <div className='px-10 mt-10 md:mt-0' id='aboutme'>
  
      <div className='text-center font-bold md:text-4xl text-2xl mb-10 mt-10 flex justify-center '> <span className='flex border-4 px-6  py-4 space-x-4 rounded-lg'><span className=' tracking-widest  '>
        About Me</span> < FaUser className='' /></span></div>
      <div className='  md:p-5  '>
        <div className='md:flex md:items-center justify-center '>
        <p className=' '>I am a  developer based in Nawalparasi,Nepal. I am an Information Technology undergraduate from TU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using HTML, CSS ,Node js , React js. Working for myself to improve my skills. Love to work in team and build  clones. <p> Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.In case of any problems or the need for changes, I can introduce new functionalities and solutions.</p>
     


</p>
<img src={WebImage} alt=""  className='item-center'/>
</div>

      </div>
     
      
  
    
    </div>
  )
}

export default AboutMe
