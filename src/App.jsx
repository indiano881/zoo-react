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
  const [category, setCategory] =useState("home")
  return (
    <>
<Header pageTitle={"Home page"}/>
    
      <Routes>
      <Route element={<DesktopLayout/>}>
        <Route element={<MobileLayout mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}>
        
          <Route path='/' element={<MainContent showAnimal={showAnimal} setShowAnimal={setShowAnimal} category="home" setCategory={setCategory}/>} />
          <Route path='mammals' element={<MainContent showAnimal={showAnimal} setShowAnimal={setShowAnimal} category="mammals" setCategory={setCategory}/>} />
          <Route path='birds' element={<MainContent showAnimal={showAnimal} setShowAnimal={setShowAnimal} category="birds" setCategory={setCategory}/>} />
          <Route path='reptiles' element={<MainContent showAnimal={showAnimal} setShowAnimal={setShowAnimal} category="reptiles" setCategory={setCategory}/>} />

        </Route>
        
        
          

        </Route>
        
        
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
