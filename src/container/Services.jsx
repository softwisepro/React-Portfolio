import React from 'react';
import ServiceImg from '../assets/profile.png'

const Services = () => {
  return (
    <div className='h-full w-full flex justify-start items center flex-col transition-all overflow-y-auto'>
      <div className='relative w-full h-full'>
        <div className='justify-between items-center w-full h-full'>
          <div className='flex flex-col md:flex-row md:space-x-5 top-0 bottom-0 left-0 right-0 justify-center items-center text-center p-5'>
            <div className='w-full p-5 m-4 mx-auto flex-flex-col space-y-5 rounded-xl shadow-lg'>
              <img src={ServiceImg} className='mx-auto rounded-full' />
              <h1 className='text-xl font-bold text-blue-500'>Web Development.</h1>
              <p className='p-5 text-md font-bold text-gray-300 text-center'>
              Once you have added this rule and saved your document, go back to your browser and click around
              </p>
            </div>

            <div className='w-full p-5 m-4 mx-auto flex-flex-col space-y-5 rounded-xl shadow-lg'>
              <img src={ServiceImg} className='mx-auto rounded-full' />
              <h1 className='text-xl font-bold text-blue-500'>Web Development.</h1>
              <p className='p-5 text-md font-bold text-gray-300 text-center'>
              Once you have added this rule and saved your document, go back to your browser and click around
              </p>
            </div>

            <div className='w-full p-5 m-4 mx-auto flex-flex-col space-y-5 rounded-xl shadow-lg'>
              <img src={ServiceImg} className='mx-auto rounded-full' />
              <h1 className='text-xl font-bold text-blue-500'>Web Development.</h1>
              <p className='p-5 text-md font-bold text-gray-300 text-center'>
              Once you have added this rule and saved your document, go back to your browser and click around
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services