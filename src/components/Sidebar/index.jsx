import styles from './Sidebar.module.css'

import SidebarButton from "../SidebarButton"

const Sidebar = () => {
    return (
        
          <div className={styles.sidebarContainer}> 

          <p>SIDEBAR</p>
          <SidebarButton name="cassowary" />

          </div>
        
    )
};

export default Sidebar;
