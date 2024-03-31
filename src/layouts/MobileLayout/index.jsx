import { NavLink, Outlet } from "react-router-dom"
import {getImageURL} from "../../utils/functions"
import styles from "./MobileLayout.module.css"

const MobileLayout = ({mobileMenu,setMobileMenu, setShowAnimal}) => {
  
  const handleClickIconMenu = () => {
    setMobileMenu(mobileMenu = mobileMenu==="false" ? "true" : "false")
  }

  const handleClick = () => {
    setShowAnimal(null)
  }

    return (
        <>
        <img className={styles.mobileImg} onClick={handleClickIconMenu} src={getImageURL("align-justify.svg")} alt='menu icon' height="35px" width="35px"/>
          
          {mobileMenu==="true" && <>
          
           <NavLink className={styles.mobileMenu} to="/" onClick={handleClick}> Home </NavLink>
           <NavLink className={styles.mobileMenu} to="mammals" onClick={handleClick}> Mammals </NavLink>
           <NavLink className={styles.mobileMenu} to="birds" onClick={handleClick}> Birds </NavLink>
           <NavLink className={styles.mobileMenu} to="reptiles" onClick={handleClick}> Reptiles </NavLink>
          </>
          
          }
 
          <Outlet />
        </>
    )
}

export default MobileLayout
