import { NavLink, Outlet } from "react-router-dom"
import styles from "./MobileLayout.module.css"

const MobileLayout = ({mobileMenu,setMobileMenu, setShowAnimal}) => {
  
  const handleClickIconMenu = () => {
    setMobileMenu(mobileMenu = mobileMenu==="false" ? "true" : "false")
    console.log(mobileMenu)
  }

  const handleClick = () => {
    setShowAnimal(null)
  }

    return (
        <>
        <section class={styles.menu}>
          <nav id={styles.navbar} class="navigation" role="navigation">

            <input id={styles.toggle1} type="checkbox" />
            <label className={styles.mobileImg} onClick={handleClickIconMenu} for={styles.toggle1}>
              <div class={styles.top}></div>
              <div class={styles.meat}></div>
              <div class={styles.bottom}></div>
            </label>
          
            {mobileMenu==="true" && 
            <>
              <nav class={styles.navigationContainer}>
                <NavLink className={styles.mobileMenu} to="/" onClick={handleClick}> Home </NavLink>
                <NavLink className={styles.mobileMenu} to="mammals" onClick={handleClick}> Mammals </NavLink>
                <NavLink className={styles.mobileMenu} to="birds" onClick={handleClick}> Birds </NavLink>
                <NavLink className={styles.mobileMenu} to="reptiles" onClick={handleClick}> Reptiles </NavLink>
              </nav>
            </>
            }

          </nav>
        </section>
        
        <Outlet />
        </>
    )
}

export default MobileLayout
