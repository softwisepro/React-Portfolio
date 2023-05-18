import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full text-white bg-black h-auto px-32 py-5 flex justify-between items-center'>
        <div>
            <Logo />
        </div>

        <div>
            <p 
                className='uppercase'
            >All Rights Reseved | copyright &copy; <Link target='_blank' className='text-orange-400' to='http://atomatiki.tech'>atomatiki.tech</Link></p>
        </div>
    </div>
  )
}

export default Footer