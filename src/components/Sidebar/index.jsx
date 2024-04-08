import SidebarButton from "../SidebarButton"
import styles from './Sidebar.module.css'
import { allAnimalArray, mammalsArray, reptileArray, birdsArray } from '../../data/data';

const Sidebar = ({setShowAnimal, category, setCategory, alreadyClicked, setAlreadyClicked}) => {
      
    return (
          <div className={styles.sidebarContainer}>
            <p className={styles.ourAnimals}>Animals: </p>
                {category==="home" && allAnimalArray.map((item,index )=> <SidebarButton showAnimal={item.name} key={index} setShowAnimal={setShowAnimal} alreadyClicked={alreadyClicked} setAlreadyClicked={setAlreadyClicked}/>)}
                {category==="mammals" && mammalsArray.map((item,index )=> <SidebarButton showAnimal={item.name} key={index} setShowAnimal={setShowAnimal} alreadyClicked={alreadyClicked} setAlreadyClicked={setAlreadyClicked}/>)}
                {category==="reptiles" && reptileArray.map((item,index )=> <SidebarButton showAnimal={item.name} key={index} setShowAnimal={setShowAnimal} alreadyClicked={alreadyClicked} setAlreadyClicked={setAlreadyClicked}/>)}
                {category==="birds" && birdsArray.map((item,index )=> <SidebarButton showAnimal={item.name} key={index} setShowAnimal={setShowAnimal} alreadyClicked={alreadyClicked} setAlreadyClicked={setAlreadyClicked}/>)}
          </div>
    )
}

export default Sidebar;
