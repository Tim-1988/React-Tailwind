import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-green-500 font-bold p-2'>GROWING WITH DATA MANAGING POWER</p>
          <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>Optimize your Data Flows.</h1>
          <div className='flex justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-blue-400'>Powerful Data Managing For</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 py-4 text-blue-400' 
              strings={['JS', 'PHP', 'RUBY', 'SQL']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='md:text-2xl text-xl font-bold text-green-500'>Manage your data flows to increase efficiency for your Business</p>
          <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero