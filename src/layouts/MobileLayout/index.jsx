import { NavLink, Outlet } from "react-router-dom"
import {getImageURL} from "../../utils/functions"
import { useState } from 'react'
import styles from "./MobileLayout.module.css"
const MobileLayout = ({mobileMenu,setMobileMenu}) => {
  

  const handleClick = () => {
    setMobileMenu(mobileMenu = mobileMenu==="false" ? "true" : "false")
    console.log(mobileMenu)

  }
    return (
        <>
        <img className={styles.mobileImg} onClick={handleClick} src={getImageURL("align-justify.svg")} alt='menu icon' height="35px" width="35px"/>
          
          {mobileMenu==="true" && <>
          
           <NavLink className={styles.mobileMenu} to="/" > Home </NavLink>
           <NavLink className={styles.mobileMenu} to="mammals" > Mammals </NavLink>
           <NavLink className={styles.mobileMenu} to="birds" > Birds </NavLink>
           <NavLink className={styles.mobileMenu} to="reptiles" > Reptiles </NavLink>
          </>
          
          
          }
         


          <Outlet />
        </>
    )
}

export default MobileLayout
