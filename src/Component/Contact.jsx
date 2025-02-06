import React, { useState } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Fixed Typo
    
    if (!formData.name || !formData.email || !formData.message) { 
      toast.error('Please fill out all fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    fetch("https://formspree.io/f/xnnjzjjj", {
      method: "POST",
      headers: { 
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error('There was an issue sending your message. Please try again.');
        }
      })
      .catch((error) => {
        toast.error("An error occurred while sending the message.");
        console.error('Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
        <div className='w-full max-w-md rounded-lg shadow-lg p-8'>
          <form onSubmit={handleFormSubmit}>
            <div className='mb-4'>
              <input
                className='w-full py-2 px-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-primarycolor'
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Your Name'
                
              />
            </div>
            <div className='mb-4'>
              <input
                className='w-full py-2 px-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-primarycolor'
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Your Email'
               
              />
            </div>
            <div className='mb-4'>
              <textarea
                className='w-full py-2 px-3 bg-gray-700 text-black rounded focus:outline-none focus:ring-2 focus:ring-primarycolor' 
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
                rows="4"
                
              ></textarea>
            </div>
            <button
              type='submit'
              className="w-full bg-blue hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300" 
              disabled={isSubmitting}
            >
             
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
