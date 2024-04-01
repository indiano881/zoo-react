import styles from './ShortAnimal.module.css'
import {getImageURL} from "../../../utils/functions"

const ShortAnimal = ({name, group, food, description, found, smallImg, isLongAnimalModalOpen, setLongAnimalModalOpen }) => { 
    const handleClick = () => {
        setLongAnimalModalOpen( isLongAnimalModalOpen=== true ? false: true)
        
    }
    return (
        <>
        <div className={styles.shortAnimalContainer}>
            <img src={getImageURL(smallImg)} className={styles.animalImg} alt={name} height="auto" width="250px"/>
            <h2>Name: {name}</h2>
            <h4>Belongs to the <span className={styles.groupLink}>{group}</span> group</h4>
            <h4>Food: {food}</h4>
            <h4>Natural habitat: {found}</h4>
            <p className={styles.description}>Description: {description.slice(0,200)} <span>...</span></p>
            <span className={styles.readMoreBtn} onClick={handleClick}>...Read more</span>

        </div>
          
        </>
    )
};

export default ShortAnimal
