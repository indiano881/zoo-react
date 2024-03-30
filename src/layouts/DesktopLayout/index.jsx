import styles from './DesktopLayout.module.css'
import { NavLink, Outlet } from "react-router-dom"

const DesktopLayout = () => {
    
    return (
        <>
        <nav className={styles.desktopNav}>
        <NavLink className={styles.desktopMenu} to="/" > Home </NavLink>
           <NavLink className={styles.desktopMenu} to="mammals" > Mammals </NavLink>
           <NavLink className={styles.desktopMenu} to="birds" > Birds </NavLink>
           <NavLink className={styles.desktopMenu} to="reptiles" > Reptiles </NavLink>
        </nav>
           <Outlet />
        </>
        
    )
};

export default DesktopLayout;


