import React from 'react';
import ProfileImage from '../assets/profile.png';
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'

export const Leftbar = ({ closeToggle }) => {

  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  const isActiveStyle = 'text-xl text-blue-600 border p-3 rounded-full shadow-sm';
  const isNotActiveStyle = 'text-xl text-blue-600 border p-3 rounded-full shadow-sm';


  return (
    <div>
      {/* responsive bar */}
      <div className='w-full min-h-screen transition-all'>
        <div className='flex flex-col'>
          <div className='rounded-full mx-auto border overflow-hidden mt-5'>
            <img src={ProfileImage} className='w-32' />
          </div>
          <div className='p-2 w-full'>
            <h2 className='text-center text-md'>Jackson Kweyunga</h2>
          </div>
          <div className='flex flex-col space-y-2 p-5 text-center'>
            <NavLink
              to="/"
              onClick={handleCloseSidebar}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={handleCloseSidebar}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleCloseSidebar}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            >
              About Me
            </NavLink>

            <NavLink
              to="/contact"
              onClick={handleCloseSidebar}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            >
              Contact Me
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar