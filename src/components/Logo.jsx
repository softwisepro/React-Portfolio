import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoImage from '../assets/atomatiki.png'

const LinkMotion = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center m-2'>
        <LinkMotion
            to='/'
            className='h-16 w-16 items-center justify-center text-center flex border p-1 rounded-full bg-black'
            whileHover={{
                backgroundColor:["black", "orange"],
                animationDuration: 1,
                transition:'all',
                animation:'ease-in-out',
            }}
        >
            <img src={LogoImage} />
        </LinkMotion>
    </div>
  )
}

export default Logo