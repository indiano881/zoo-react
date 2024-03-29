import styles from './Sidebar.module.css'

import SidebarButton from "../SidebarButton"

import { allAnimalArray } from '../../data/data';

const Sidebar = ({setShowAnimal}) => {
    return (
        
          <div className={styles.sidebarContainer}> 

          <p>SIDEBAR</p>
                {allAnimalArray.map((item,index )=> <SidebarButton name={item.name} key={index} setShowAnimal={setShowAnimal}/>)}

          

          </div>
        
    )
};

export default Sidebar;
