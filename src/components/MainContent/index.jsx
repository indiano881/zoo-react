import styles from './MainContent.module.css'
import Sidebar from '../Sidebar';
import DisplayContent from '../DisplayContent';
const MainContent = () => {
    return (
        <>
          <section className={styles.mainContent}>
            
            <Sidebar />
            <DisplayContent />
          </section>
        </>
    )
};

export default MainContent;
