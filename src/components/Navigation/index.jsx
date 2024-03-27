import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
          <NavLink to="/" > Home </NavLink>
          <NavLink to="mammals" > Mammals </NavLink>
          <NavLink to="birds" > Birds </NavLink>
          <NavLink to="reptiles" > Reptiles </NavLink>
        </>
    )
};

export default Navigation;
