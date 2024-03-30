import styles from './MainContent.module.css'
import Sidebar from '../Sidebar';
import DisplayContent from '../DisplayContent';
import ShortAnimal from "../Animals/ShortAnimal"
import { allAnimalArray } from '../../data/data'; 

const MainContent = ({showAnimal, setShowAnimal, category, setCategory}) => {
    return (
        <>
          <section className={styles.mainContent}>
            
            <Sidebar setShowAnimal={setShowAnimal} category={category} setCategory={setCategory}/>
            {!showAnimal && <DisplayContent category={category} setCategory={setCategory}/>}
            {showAnimal &&   allAnimalArray.filter(item=> item.name=== showAnimal).map((item, index)=> <ShortAnimal key={index} {...item} />)}
            
          </section>
        </>
    )
};

export default MainContent;
