import { useState } from 'react'
import {Routes, Route, NavLink} from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  

  return (
    <>
<Header pageTitle={"Home page"}/>
    <Navigation />

      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='mammals' element={<p>mammals</p>} />
        <Route path='birds' element={<p>birds</p>} />
        <Route path='reptiles' element={<p>reptiles</p>} />
        
      </Routes>
      
    </>
  )
}

export default App
