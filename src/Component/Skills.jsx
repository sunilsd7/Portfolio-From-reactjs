import React from 'react';
import HTMLImage from '../assets/html.png';
import JsImage from '../assets/js.png';
import CssImage from '../assets/css.png';
import TailwindImage from '../assets/tailwindcss.png';
import NodeImage from '../assets/nodejs.png';
import ReactImage from '../assets/react.png';

const Skills = () => {
  return (
    <div id="skills" className="py-10 ">
      <h2 className="text-center font-bold md:text-4xl text-3xl mb-8   mx-auto  "><span className='border-4 rounded-lg p-2 px-5'>Skills</span></h2>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center px-10 lg:px-20">
        <div>
          <img src={HTMLImage} alt="HTML" className="w-1/2 mx-auto  hover:scale-110" />
        </div>
        <div>
          <img src={CssImage} alt="CSS" className="w-1/2 mx-auto hover:scale-110" />
        </div>
        <div>
          <img src={JsImage} alt="JavaScript" className="w-1/2 mx-auto  hover:scale-110" />
        </div>
      </div>
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center px-10 lg:px-20 mt-8">
        <div>
          <img src={ReactImage} alt="React" className="w-1/2 mx-auto  hover:scale-110" />
        </div>
        <div>
          <img src={NodeImage} alt="Node.js" className="w-1/2 mx-auto  hover:scale-110" />
        </div>
        <div>
          <img src={TailwindImage} alt="Tailwind CSS" className="w-1/2 mx-auto  hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
