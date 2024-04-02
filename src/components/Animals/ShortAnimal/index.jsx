import styles from './ShortAnimal.module.css'
import {getImageURL} from "../../../utils/functions"

const ShortAnimal = ({name, group, food, description, found, smallImg, isLongAnimalModalOpen, setLongAnimalModalOpen, setCategory, setShowAnimal }) => { 
    const handleClick = () => {
        setLongAnimalModalOpen( isLongAnimalModalOpen=== true ? false: true)
    }

    const handleClickCategory = () => {
        setCategory(group)
        console.log(group)
        setShowAnimal(null)
        
    }
    return (
        <>
        <div className={styles.shortAnimalContainer}>
            <img src={getImageURL(smallImg)} className={styles.animalImg} alt={name} height="auto" width="250px"/>
            <h2>Name: {name}</h2>
            <h4>Belongs to the <a className={styles.groupLink} onClick={handleClickCategory} href={group}>{group}</a> group</h4>
            <h4>Food: {food}</h4>
            <h4>Natural habitat: {found}</h4>
            <p className={styles.description}>Description: {description.slice(0,200)} <span>...</span></p>
            <p className={styles.readMoreBtn} onClick={handleClick}>...Read more</p>

        </div>
          
        </>
    )
};

export default ShortAnimal
