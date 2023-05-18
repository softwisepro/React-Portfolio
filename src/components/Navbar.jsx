import React from 'react'
import { Link, useResolvedPath } from 'react-router-dom';
import Logo from './Logo';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons';

const CustomLink = ({ to, title, className = '' }) => {

    const router = useResolvedPath();

    return (
        <Link to={to} className={`${className} relative group`}>
            {title}

            <span
                className={`bg-black h-[2px] inline-block absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.pathname === to ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}

const CustomSocialLink = ({ to, title, className = '' }) => {
    return (
        <Link to={to} className={`${className} hover:scale-110 hover:rotate-6 transition-all ease duration-300`}>
            {title}
        </Link>
    )
}

const Navbar = () => {
    return (
        <header
            className='w-full py-10 px-32 font-medium border flex justify-between items-center'
        >
            <nav>
                <CustomLink to='/' title='Home' className='mr-4' />
                <CustomLink to='/about' title='About' className='mx-4' />
                <CustomLink to='/projects' title='Projects' className='mx-4' />
                <CustomLink to='/blog' title='Blog' className='ml-4' />
            </nav>
            <nav className='flex space-x-5'>
                <CustomSocialLink
                    to='https://twitter.com'
                    target={'_blank'}
                    title={<TwitterIcon className='mr-1' />}
                />
                <CustomSocialLink
                    to='https://linkedin.io'
                    target={'_blank'}
                    title={<LinkedInIcon className='mr-1' />}
                />
                <CustomSocialLink
                    to='https://github.com'
                    target={'_blank'}
                    title={<GithubIcon className='mr-1' />}
                />

            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar