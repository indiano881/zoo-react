import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MobileLayout from './layouts/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout';


import "./global.css"

function App() {
  const [mobileMenu, setMobileMenu] = useState("false")
  const [showAnimal, setShowAnimal] = useState(null);
  return (
    <>
<Header pageTitle={"Home page"}/>
    
      <Routes>
      <Route element={<DesktopLayout/>}>
        <Route element={<MobileLayout mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}>
        
          <Route path='/' element={<MainContent setShowAnimal={setShowAnimal}/>} />
          <Route path='mammals' element={<MainContent />} />
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
