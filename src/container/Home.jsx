import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import ProfilePic from '../assets/profile/developer-pic.png'
import { Link, Route, Routes } from 'react-router-dom'
import { AiOutlineDownload, AiOutlinePhone } from 'react-icons/ai'
import Footer from '../components/Footer'
import About from '../container/About';

const Home = () => {
    return (
        <div className='Main__body w-full min-h-full'>
            <div className='Top__navigation'>
                <Navbar />
            </div>

            <div className='w-full min-h-screen text-black flex items-center'>
                <Layout className='pt-0 pb-0'>
                    <div className='flex flex-row justify-between items-center w-full'>
                        <div className='w-1/2'>
                            <img src={ProfilePic} alt='Jackson Kweyung' className='w-full h-auto' />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-4xl leading-tight text-left p-5 inline-block font-bold'>Transforming Vision into Reality Through Coding  <br /> and Design.</h1>
                            <p className='text-xl text-left px-5 font-bold text-gray-400'>
                                As a proficient full-stack developer, my commitment lies in transforming concepts into cutting-edge web applications. Discover my recent projects and articles that demonstrate my expertise in React.js and web development.
                            </p>
                            <div className='flex p-10 space-x-5 w-full justify-center items-center'>
                                <Link
                                    to='/'
                                    className='flex text-md font-bold text-white bg-gray-700 py-1 border px-3 hover:scale-105 transition-[scale] duration-75 ease rounded-md justify-center items-center'
                                >
                                    Download CV
                                    <AiOutlineDownload fontSize={30} className='ml-2' />
                                </Link>

                                <Link
                                    to='/contact'
                                    className='flex text-md font-bold text-gray-500  justify-center hover:scale-105 transition-[scale] duration-75 ease items-center'
                                >
                                    Contact Me
                                    <AiOutlinePhone fontSize={30} className='ml-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
            <div className='footer'>
                <Footer />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default Home