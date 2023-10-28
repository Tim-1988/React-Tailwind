import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 px-4 mx-auto max-w-7xl text-white'>
        <h1 className='w-full text-3xl font-bold text-green-500'>ServerFlow</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>HOME</li>
          <li className='p-4'>COMPANY</li>
          <li className='p-4'>RESOURCES</li>
          <li className='p-4'>ABOUT</li>
          <li className='p-4'>CONTACT</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-gray-600 ease-in-out duration-700' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-700 bg-gray-600 ease-in-out duration-700'}>
        <h1 className='w-full text-3xl font-bold text-green-500 m-4'>ServerFlow</h1>
        <ul>
          <li className='p-4 border-b border-gray-500'>HOME</li>
          <li className='p-4 border-b border-gray-500'>COMPANY</li>
          <li className='p-4 border-b border-gray-500'>RESOURCES</li>
          <li className='p-4 border-b border-gray-500'>ABOUT</li>
          <li className='p-4'>CONTACT</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar