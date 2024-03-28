import styles from './Sidebar.module.css'

import SidebarButton from "../SidebarButton"

const Sidebar = ({setShowAnimal}) => {
    return (
        
          <div className={styles.sidebarContainer}> 

          <p>SIDEBAR</p>
          <SidebarButton name="Cassowary" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Echidna" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Frill-necked lizard" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Tasmanian devil" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Hawksbill Turtle" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Kookaburra" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Quokka" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Perentie" setShowAnimal={setShowAnimal}/>
          <SidebarButton name="Yellow tailed black cockatoo" setShowAnimal={setShowAnimal}/>

          </div>
        
    )
};

export default Sidebar;
