import React from 'react';
import HTMLImage from '../assets/html.png';
import JsImage from '../assets/js.png';
import CssImage from '../assets/css.png';
import TailwindImage from '../assets/tailwindcss.png';
import NodeImage from '../assets/nodejs.png';
import ReactImage from '../assets/react.png';

const Skills = () => {
  return (
    <div id="skills" className="py-10">
      <h2 className="text-center font-bold text-4xl mb-8">Skills</h2>
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center px-10 lg:px-20">
        <div>
          <img src={HTMLImage} alt="HTML" className="w-1/2 mx-auto" />
        </div>
        <div>
          <img src={CssImage} alt="CSS" className="w-1/2 mx-auto" />
        </div>
        <div>
          <img src={JsImage} alt="JavaScript" className="w-1/2 mx-auto" />
        </div>
      </div>
      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center px-10 lg:px-20 mt-8">
        <div>
          <img src={ReactImage} alt="React" className="w-1/2 mx-auto" />
        </div>
        <div>
          <img src={NodeImage} alt="Node.js" className="w-1/2 mx-auto" />
        </div>
        <div>
          <img src={TailwindImage} alt="Tailwind CSS" className="w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
