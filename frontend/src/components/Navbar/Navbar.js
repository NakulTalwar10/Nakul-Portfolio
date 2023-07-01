import React, { useState, useEffect } from 'react';
import nakultalwar from '../../img/WhatsApp Image 2023-06-23 at 17.15.22.jpg';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-white py-2 px-4 shadow-md ${isNavSticky ? 'sticky top-0 z-50' : ''}`}>
      <div className='hidden sm:flex flex-row justify-between items-center'>
        {/* Desktop Navbar */}
        <ul className='flex flex-wrap'>
        <Link  to="Home" spy={true} smooth={true} offset={100} duration={100}>
          <li className='mx-3 font-bold text-xl hover:text-gray-500 cursor-pointer'>
            Home
          </li>
          </Link>

          <Link to="About" spy={true} smooth={true} offset={100} duration={100}>
          <li className='mx-3 font-bold text-xl hover:text-gray-500 cursor-pointer'>
            About
          </li>
          </Link>

          <Link to="Resume" spy={true} smooth={true} offset={100} duration={100}>
          <li className='mx-3 font-bold text-xl hover:text-gray-500 cursor-pointer'>
            Resume
          </li>
          </Link>

          <Link to="Contact" spy={true} smooth={true} offset={100} duration={100}>
          <li className='mx-3 font-bold text-xl hover:text-gray-500 cursor-pointer'>
            Contact
          </li>
          </Link>
        </ul>
        <div className='text-center my-4 sm:my-0'>
          <h1 className='text-lg sm:text-xl font-bold'>Nakul Talwar</h1>
          <p className='text-sm sm:text-base'>MERN Stack | Full Stack Developer</p>
        </div>
      </div>

      {/* Responsive Mobile Navbar */}
      <div className='sm:hidden flex flex-col items-center my-4'>
        <div className='relative w-24 h-24 overflow-hidden rounded-full mb-2'>
          <img
            className='object-cover w-full h-full'
            src={nakultalwar}
            alt='Nakul Talwar'
          />
          <div className='absolute inset-0 rounded-full bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300'>
            <div className='flex items-center justify-center h-full'>
              <i className='text-white fas fa-search text-xl'></i>
            </div>
          </div>
        </div>
        <h1 className='text-lg font-bold'>Nakul Talwar</h1>
        <p className='text-sm'>MERN Stack | Full Stack Developer</p>
        <ul className='flex'>

        <Link to="Home" spy={true} smooth={true} offset={50} duration={100}>
          <li className='mx-2 font-bold text-sm hover:text-gray-500 cursor-pointer'>
            Home
          </li>
          </Link>

          <Link to="Contact" spy={true} smooth={true} offset={50} duration={100}>
          <li className='mx-2 font-bold text-sm hover:text-gray-500 cursor-pointer'>
            Contact
          </li>
          </Link>

          <Link to="About" spy={true} smooth={true} offset={50} duration={100}>
          <li className='mx-2 font-bold text-sm hover:text-gray-500 cursor-pointer'>
            About
          </li>
          </Link>

          <Link to="Resume" spy={true} smooth={true} offset={50} duration={100}>
          <li className='mx-2 font-bold text-sm hover:text-gray-500 cursor-pointer'>
            Resume
          </li>
          </Link>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
