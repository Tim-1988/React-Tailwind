import React from 'react'
import One from '../assets/one.png'
import Two from '../assets/two.png'
import Three from '../assets/three.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-500 shadow-2xl'>
                <img className='w-20 mx-auto' src={One} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>1 Server</h2>
                <p className='text-center text-4xl font-bold'>49$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Proxy</p>
                    <p className='py-2 border-b mx-8'>Traffic for up to 5GB per day</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-500 shadow-2xl'>
                <img className='w-20 mx-auto' src={Two} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>2 Servers</h2>
                <p className='text-center text-4xl font-bold'>99$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Proxies</p>
                    <p className='py-2 border-b mx-8'>Traffic for up to 25GB per day</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-500 shadow-2xl'>
                <img className='w-20 mx-auto' src={Three} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>3 Servers</h2>
                <p className='text-center text-4xl font-bold'>149$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>10TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Proxies</p>
                    <p className='py-2 border-b mx-8'>Infinite Traffic</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards