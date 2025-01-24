import React from 'react'
import Furniture from '../assets/furniture.png'
import Medimitra from '../assets/medi-mitra.png'



const Projects = () => {
  return (
    <section>
    <div id='projects'>
      <div className='text-center mx-auto font-bold text-4xl border-4 rounded-lg md:w-[10%] w-[40%] p-2 '>
        Projects
      </div>
     
      <div className="md:grid md:grid-cols-2 px-20 gap-16 mt-5">
        <div className='border-2 p-5 my-4 rounded-[1rem] '>
            <img src={Furniture} alt="" />
            <p className='font-bold text-2xl mt-3'>Furniture website:demo project from react</p>
            <div className='space-x-6 mt-3 flex '>
            <button className='border-4 rounded-lg md:text-2xl px-2 hover:text-blue '><a href="https://github.com/sunilsd7/Furniture-website.git" target='_blank'>Github Repo</a></button>
            <button className='border-4 rounded-lg md:text-2xl px-2 hover:text-blue '><a href="https://furniturewebsitee.netlify.app/" target='_blank'> View Live</a></button></div>
            
        </div>
        
            <div className='border-2 p-5 my-4 rounded-[1rem]'>
            <img src={Medimitra} alt="img" />
            <p className='font-bold text-2xl mt-3'>Medi-mitra: A smart Vaccination management System</p>
            <button className='border-4 rounded-lg text-2xl px-2 hover:text-blue '><a href="https://github.com/sunilsd7/Medi-mitra.git" target='_blank'>Github Repo</a></button>

            </div>
           
        
        
        
      </div>
      </div>
      </section>
    
  )
}

export default Projects
