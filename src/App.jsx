import { useState } from 'react'
import {Routes, Route, NavLink} from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MobileLayout from './layouts/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout';
import {getImageURL} from "./utils/functions"

import "./global.css"

function App() {
  const [mobileMenu, setMobileMenu] = useState("false")
  return (
    <>
<Header pageTitle={"Home page"}/>
    
      <Routes>
      <Route element={<DesktopLayout/>}>
        <Route element={<MobileLayout mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}>
        
          <Route path='/' element={<p>Home</p>} />
          <Route path='mammals' element={<p>mammals</p>} />
          <Route path='birds' element={<p>birds</p>} />
          <Route path='reptiles' element={<p>reptiles</p>} />

        </Route>
        
        
          

        </Route>
        
        
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
