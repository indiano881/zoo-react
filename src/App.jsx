import { useState } from 'react'
import {Routes, Route, NavLink} from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MainLayout from './layouts/MainLayout';

import "./global.css"

function App() {
const [mobileMenu, setMobileMenu] = useState(null)
  return (
    <>
<Header pageTitle={"Home page"}/>
    
      <Routes>
        
        <Route element={<MainLayout />}>
          <Route path='/' element={<p>Home</p>} />
          <Route path='mammals' element={<p>mammals</p>} />
          <Route path='birds' element={<p>birds</p>} />
          <Route path='reptiles' element={<p>reptiles</p>} />

        </Route>
        
        
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
