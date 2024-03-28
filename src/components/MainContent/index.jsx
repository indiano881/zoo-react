import styles from './MainContent.module.css'
import Sidebar from '../Sidebar';
import DisplayContent from '../DisplayContent';
import ShortAnimal from "../Animals/ShortAnimal"
import { echidna } from '../../data/data'; {/***rimuovere */}

const MainContent = ({showAnimal,setShowAnimal}) => {
    return (
        <>
          <section className={styles.mainContent}>
            
            <Sidebar setShowAnimal={setShowAnimal}/>
            {!showAnimal && <DisplayContent />}
            {showAnimal && <ShortAnimal {...echidna}/>}
            
          </section>
        </>
    )
};

export default MainContent;
