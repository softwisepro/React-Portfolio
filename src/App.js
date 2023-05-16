import React from 'react';
import { Landing } from './container/Landing';
import Contact from './container/Contact';
import About from './container/About';
import Home from './container/Home'
import './output.css'
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';



const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route exact path="*" element={<Landing />} />
        </Routes>
    </HashRouter>
  )
}

export default App