import React from 'react'
import { IoMdDownload } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='  text-white'>
      <nav className=' text-2xl flex'>
        
        <div className='   px-10  md:w-1/2 md:clip-right  py-6'>
        <div  className='font-bold md:text-3xl  md:px-8'>SD SHARMA</div>
        </div>
       
       
        <div className='md:ms-auto md:bg-white md:w-1/2 clip-nav md:text-black font-medium'>
            <ul className='flex space-x-10 justify-end mt-4 px-10 '>
                <li> <a href="#aboutme" className='hover:text-blue'>About Me</a> </li>
                <li><a href="#skills" className='hover:text-blue'>Skills</a></li>
                <li><a href="#projects" className='hover:text-blue'>Projects</a></li>

                <li><a href="#contactme" className='hover:text-blue' >Contact Me</a></li>
                <li><a className='border-2 rounded-lg p-2 hover:text-blue flex' download="Sunil_CV.pdf" href='Sunil-Dumre-cv.pdf'>Download CV <IoMdDownload className='m-2 '/></a></li>
            </ul>
        </div>
       
      </nav>
    </div>
  )
}

export default Navbar
