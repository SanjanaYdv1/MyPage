"use client"; // Add this line at the top of the file

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className='text-transparent mb-6 text-3xl font-extrabold bg-clip-text bg-white'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm { " " }</span>
            <TypeAnimation
              sequence={[
                'Sanjana',
                1000, // wait 1s before replacing "Sanjana" with "Web developer"
                'Web developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-lg mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel est sed enim porro error deserunt saepe?
            Perspiciatis iure, cum voluptas ad et nemo consequuntur dolore at exercitationem reiciendis magni?
          </p>
          <div className='mt-4'>
            <button className='bg-gradient-to-r from-purple-800 to-pink-600 text-white text-lg px-5 py-2 rounded-full mr-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-700 transition duration-300 ease-in-out'>Hire Me</button>
            <button className='bg-gradient-to-r from-blue-400 to-pink-600 text-white text-lg px-1 py-1 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-700 transition duration-300 ease-in-out'>
              <span className='block bg-black hover:bg-purple-600 rounded-full px-5'>Download CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-5 flex justify-center items-center'>
          <div className='rounded-full overflow-hidden bg-[#181818]'>
            <Image className='rounded-full' src="/images/hero.jpg" alt='Sanjana in a professional setting' width={300} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;