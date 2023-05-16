import { React } from 'react';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import Services from '../container/Services';
import Contact from '../container/Contact';
import Home from '../container/Home'
import About from '../container/About';
import { Component } from 'react';

const Rightbar = () => {

  return (
    <div className='h-screen w-full flex flex-col'>
    <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default Rightbar