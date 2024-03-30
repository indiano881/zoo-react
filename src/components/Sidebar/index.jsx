import styles from './Sidebar.module.css'

import SidebarButton from "../SidebarButton"

import { allAnimalArray, mammalsArray, reptileArray, birdsArray } from '../../data/data';

const Sidebar = ({setShowAnimal}) => {
    return (
        
          <div className={styles.sidebarContainer}> 

          <p>SIDEBAR</p>
                {allAnimalArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
                {mammalsArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
                {reptileArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
                {birdsArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
          

          </div>
        
    )
};

export default Sidebar;
