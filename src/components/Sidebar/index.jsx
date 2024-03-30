import styles from './Sidebar.module.css'

import SidebarButton from "../SidebarButton"

import { allAnimalArray, mammalsArray, reptileArray, birdsArray } from '../../data/data';

const Sidebar = ({setShowAnimal, category, setCategory}) => {
    return (
        
          <div className={styles.sidebarContainer}> 

          <p>SIDEBAR</p>
                {category==="home" && allAnimalArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
                {category==="mammals" && mammalsArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
                {category==="reptiles" && reptileArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
                {category==="birds" && birdsArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}
          

          </div>
        
    )
};

export default Sidebar;
