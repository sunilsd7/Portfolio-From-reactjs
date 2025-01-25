import React from 'react';
import Furniture from '../assets/furniture.png';
import Medimitra from '../assets/medi-mitra.png';
import { FaEye } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Furniture Website: Demo project using React',
    description: 'A responsive website showcasing furniture products.',
    image: Furniture,
    repoLink: 'https://github.com/sunilsd7/Furniture-website.git',
    liveLink: 'https://furniturewebsitee.netlify.app/',
  },
  {
    id: 2,
    title: 'Medi-mitra: A Smart Vaccination Management System',
    description: 'A system for managing vaccination schedules efficiently.',
    image: Medimitra,
    repoLink: 'https://github.com/sunilsd7/Medi-mitra.git',
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <section className="px-4 py-8">
      <div id="projects" className="text-center">
        <h2 className="text-4xl font-bold">
          <span className="border-4 rounded-lg px-5 py-2">Projects</span>
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 mt-8">
        {projects.map(({ id, title, description, image, repoLink, liveLink }) => (
          <article
            key={id}
            className="border-2 p-6 my-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img src={image} alt={`${title} screenshot`} className="rounded-lg" />
            <h3 className="font-bold text-2xl mt-4">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-lg px-4 py-2 bg-blue-500 text-white text-lg bg-blue"
              >
                Github Repo
              </a>
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-white rounded-lg px-4 py-2 hover:text-blue text-lg"
                >
                  View Live <FaEye />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
