import React from 'react';
import '../output.css'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineDownload } from 'react-icons/ai';

const Home = () => {
  return (
    <div className='h-full w-full flex justify-start items center flex-col transition-all'>
      <div className='relative w-full h-full'>
        <div className='justify-between items-center w-full h-full'>
          <div className='flex flex-col top-0 bottom-0 left-0 right-0 justify-center items-center text-center p-5'>
            <div className='py-5 flex space-x-3'>
              <span className='text-red-400 text-3xl'>I am</span>
              <h1 className='text-3xl text-blue-300'>Jackson Kweyunga</h1>
            </div>
            <div>
              <h2 className='text-xl font-bold'>
                A Profesional web developer from Tanzania
              </h2>
            </div>
            <div className='my-5'>
              <p className='p-5 leading-8 text-center font-bold text-gray-400'>
                Once you have added this rule and saved your document, go back to your browser and click around on the links in our example. You'll see that the active link whose content is displayed from is highlighted with a blue color. What you will also see is our Home link always highlighted. That isn't correct. The fix for
              </p>
            </div>
            <div className='p-5 mb-10 flex gap-2'>
              <NavLink
                to='/about'
                className='justify-between items-center gap-5 w-full underline font-bold text-gray-300 flex flex-row transition-all'
              >
                see more about me
                <AiOutlineArrowRight fontSize={20} />
              </NavLink>
            </div>
            <div>
              <NavLink
                to='/'
                className='justify-between items-center gap-5 w-full p-5 border shadow-sm rounded-xl font-bold text-gray-600 flex flex-row hover:scale-105 hover:bg-blue-200 transition-all'
              >
                Download My CV
                <AiOutlineDownload fontSize={20} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home