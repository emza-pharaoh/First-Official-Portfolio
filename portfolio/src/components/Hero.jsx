import React from 'react'
import UnizuluLogo from '../assets/img/UNIZULU.png';
import ME from '../assets/img/Me2.png';
import {FaInstagram, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';

const Hero = () => {
  return (
    <>
    <div className='bg-hero-pattern bg-cover bg-center overflow-hidden h-screen'>
      <div className="container flex items-center justify-center h-screen gap-3">
        {/* Text */}
        <div className='flex flex-row items-center justify-center'>
          {/* Unizulu Logo */}
          
          {/* text */}
          <div>
          <h1 className='text-4xl font-poppins text-white text-shadow-lg'>Hi, I'm Emanuel Mhlanga.</h1>
          <h2 className='text-2xl font-thin text-gray-200 text-shadow-xl'>Undergraduate - Bsc Computer Science & Hydrology Student</h2>
          <h2 className='text-base font-poppins text-gray-300 text-shadow-xl'>Recently Completed My Studies At the University of Zululand</h2>
          <p className='text-base font-poppins text-gray-300 text-shadow-xl'>Looking for Real Work Where I can apply all the Skills I've Learn</p>

          <div className="flex items-center gap-7 mt-6 animate-pulse">
          
                    <a href="#">
                        <FaInstagram className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
                    </a>
                    <a href="#">
                        <FaGithub className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
                    </a>
                    <a href="#">
                        <FaFacebook className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
                    </a>
                    <a href='#'>
                        <img src={UnizuluLogo} alt="Unizulu Logo" className='w-12 h-16' />
                    </a>
                    
                </div>
          </div>

         
        </div>
         {/* Myy Picture */}
         <div className='rounded-full  w-[400px] h-[400px]'>
            <img src={ME} alt="" className='scale-150' />
          </div>
      </div>
    </div>
    </>
  )
}

export default Hero