import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MobileLayout from './layouts/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout';
import LongAnimal from "./components/LongAnimal"


import "./global.css"

function App() {
  const [mobileMenu, setMobileMenu] = useState("false")
  const [showAnimal, setShowAnimal] = useState(null);
  const [category, setCategory] =useState("home")

  const [isLongAnimalModalOpen, setLongAnimalModalOpen] = useState(false);
  const [newsletterFormData, setNewsletterFormData] = useState(null);

  const handleOpenNewsletterModal = () => {
    setLongAnimalModalOpen(true);
  };

  const handleCloseNewsletterModal = () => {
    setLongAnimalModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    setNewsletterFormData(data);
    handleCloseNewsletterModal();
  };
  
  return (
    <>
    
      <Header pageTitle={"Home page"}/>
    
      <Routes>
        <Route element={<DesktopLayout category={category} setCategory={setCategory}/>}>
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
