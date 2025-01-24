import React from 'react'
import { IoMdDownload } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='  text-white overflow-hidden font-small'>
      <nav className='  flex'>

        <div className='   px-10  md:w-[86.5%] md:clip-right  py-6'>
          <div className='font-bold md:text-2xl  md:px-8'>SD SHARMA</div>
        </div>


        <div className='md:ms-auto md:bg-white  lg:w-[89.65%] md:w-[50%] clip-nav md:text-black font-medium text-2xl'>
          <ul className='flex gap-x-10 justify-end mt-4 px-10 '>
            <li> <a href="#aboutme" className='hover:text-blue'>About</a> </li>
            <li><a href="#skills" className='hover:text-blue'>Skills</a></li>
            <li><a href="#projects" className='hover:text-blue'>Projects</a></li>

            <li><a href="#contactme" className='hover:text-blue' >Contact</a></li>
            <li><a className='border-2 rounded-lg p-1 text-xl font-medium hover:text-blue flex' download="Sunil_CV.pdf" href='Sunil-Dumre-cv.pdf'>Download CV <IoMdDownload className='m-2 ' /></a></li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
