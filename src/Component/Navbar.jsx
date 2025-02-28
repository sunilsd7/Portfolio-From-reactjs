import React, { useState, useEffect, useRef } from "react";
import { IoMdDownload } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-white font-small bg-black">
      <nav className="flex items-center justify-between px-6 py-4">
    
        <div className="font-bold text-2xl">SD SHARMA</div>

       
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

     
        <div className="hidden md:flex md:items-center md:space-x-10">
          <ul className="flex gap-x-10 text-lg">
            <li>
              <a href="#aboutme" className="hover:text-blue">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue">
                Projects
              </a>
            </li>
            <li>
              <a href="#contactme" className="hover:text-blue">
                Contact
              </a>
            </li>
            <li className="border-2 rounded-lg">
              <a
                className="flex items-center p-2 hover:text-blue"
                download="Sunil_CV.pdf"
                href="Sunil-Dumre-cv.pdf"
              >
                Download CV <IoMdDownload className="ml-2" />
              </a>
            </li>
          </ul>
        </div>

      
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-14 right-6 bg-opacity-75 text-white rounded-lg shadow-lg p-4 z-50"
          >
            <ul className="flex flex-col gap-y-4 text-lg">
              <li>
                <a
                  href="#aboutme"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contactme"
                  className="hover:text-blue"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
              <li className="border-2 rounded-lg">
                <a
                  className="flex items-center p-2 hover:text-blue"
                  download="Sunil_CV.pdf"
                  href="Sunil-Dumre-cv.pdf"
                  onClick={toggleMenu}
                >
                  Download CV <IoMdDownload className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
