import React from 'react'
import {FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div>
            <h1 className='w-full text-3xl font-bold text-green-500'>ServerFlow</h1>
            <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab sunt at facilis iusto autem maiores provident similique? Laudantium fugit asperiores laboriosam mollitia qui ipsam hic tenetur ipsum obcaecati repellendus.</p>
            <div className='flex justify-between my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
            </div>
        </div>
        <div className='col-span-2 flex justify-between mt-7'>
            <div>
                <h6 className='font-bold'>SOLUTIONS</h6>
                <ul>
                    <li className='py-2 text-sm'>Integration</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold'>SUPPORT</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>API</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold'>COMPANY</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer