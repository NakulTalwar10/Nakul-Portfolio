import React from 'react';
import './Home.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Main from '../../components/Main/Main';

import nakultalwar from '../../img/WhatsApp Image 2023-06-23 at 17.15.22.jpg';


const Home = () => {
  return (
    <div id='Home'>
      <div className='mains py-3 relative'>
        <ul className='flex text-white container'>
          <li className='mx-4 font-bold text-2xl'>
            <a href="https://www.linkedin.com/in/nakul-talwar-6b2566211/" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
              <FaLinkedin />
            </a>
          </li>
          <li className='mx-4 font-bold text-2xl'>
            <a href="https://github.com/NakulTalwar10" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
              <FaGithubSquare />
            </a>
          </li>
          <li className='mx-4 font-bold text-2xl'>
            <a href="https://www.instagram.com/nakulll.10/" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
              <FaInstagram />
            </a>
          </li>
          <li className='mx-4 font-bold text-2xl'>
            <a href="https://twitter.com/TalwarNakul" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
              <FaTwitter />
            </a>
          </li>
        </ul>
        <div className='container mx-auto px-4 lg:flex'>
          <Main />
          <div className='hidden lg:block'>
            <div className='relative w-96 h-96'>
              <div className='bubble bubble-1'></div>
              <div className='bubble bubble-2'></div>
              <div className='bubble bubble-3'></div>
              <img src={nakultalwar} alt='Nakul Talwar' className='rounded-full object-cover w-full h-full' />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
