import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import AboutComponent from './pages/AboutComponent';
import HomeComponent from './pages/HomeComponent'
import ProjectsComponents from './pages/ProjectsComponents'
import BlogComponent from './pages/BlogComponent'

const Home = () => {
    return (
        <div className='Main__body w-full min-h-full'>
            <div className='Top__navigation'>
                <Navbar />
            </div>

            <div className='w-full min-h-screen text-black flex items-center'>
                <Layout className='pt-0 pb-0'>
                    <Routes>
                        <Route path='/' element={<HomeComponent />} />
                        <Route path='/about' element={<AboutComponent />} />
                        <Route path='/projects' element={<ProjectsComponents />} />
                        <Route path='/blog' element={<BlogComponent />} />
                    </Routes>
                </Layout>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home