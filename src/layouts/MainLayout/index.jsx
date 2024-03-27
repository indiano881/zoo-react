import { NavLink, Outlet } from "react-router-dom"
import {getImageURL} from "../../utils/functions"
import { useState } from 'react'

const MainLayout = ({mobileMenu,setMobileMenu}) => {
  

  const handleClick = () => {
    setMobileMenu(mobileMenu = mobileMenu==="false" ? "true" : "false")
    console.log(mobileMenu)

  }
    return (
        <>
        <img onClick={handleClick} src={getImageURL("align-justify.svg")} alt='menu icon' height="35px" width="35px"/>
          
          {mobileMenu==="true" && <>
          
           <NavLink to="/" > Home </NavLink>
           <NavLink to="mammals" > Mammals </NavLink>
           <NavLink to="birds" > Birds </NavLink>
           <NavLink to="reptiles" > Reptiles </NavLink>
          </>
          
          
          }
         


          <Outlet />
        </>
    )
}

export default MainLayout
