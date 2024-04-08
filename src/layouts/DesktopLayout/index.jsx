import { NavLink, Outlet } from "react-router-dom";
import styles from './DesktopLayout.module.css';

const DesktopLayout = ({ setShowAnimal}) => {
    const handleClick = () => {
        setShowAnimal(null)
      }
      
    return (
        <>
            <nav className={styles.desktopNav}>
                <NavLink className={styles.desktopMenu} to="/" onClick={handleClick}> Home </NavLink>
                <NavLink className={styles.desktopMenu} to="mammals" onClick={handleClick}> Mammals </NavLink>
                <NavLink className={styles.desktopMenu} to="birds" onClick={handleClick}> Birds </NavLink>
                <NavLink className={styles.desktopMenu} to="reptiles" onClick={handleClick}> Reptiles </NavLink>
            </nav>

           <Outlet />
        </>
        
    )
}

export default DesktopLayout;


