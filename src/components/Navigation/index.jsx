import styles from './Navigation.module.css'
import { NavLink, Outlet } from 'react-router-dom';

import {getImageURL} from "../../utils/functions"

const Navigation = () => {
    return (
        <>
        <img src={getImageURL("align-justify.svg")} alt='menu icon' height="35px" width="35px"/>
          <NavLink to="/" > Home </NavLink>
          <NavLink to="mammals" > Mammals </NavLink>
          <NavLink to="birds" > Birds </NavLink>
          <NavLink to="reptiles" > Reptiles </NavLink>

          
        </>
    )
};

export default Navigation;
