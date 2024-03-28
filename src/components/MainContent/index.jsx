import styles from './MainContent.module.css'
import Sidebar from '../Sidebar';
import DisplayContent from '../DisplayContent';
const MainContent = ({setShowAnimal}) => {
    return (
        <>
          <section className={styles.mainContent}>
            
            <Sidebar setShowAnimal={setShowAnimal}/>
            <DisplayContent />
          </section>
        </>
    )
};

export default MainContent;
