import styles from './ShortAnimal.module.css'
import {getImageURL} from "../../../utils/functions"

const ShortAnimal = ({name, group, food, description, found, smallImg, isLongAnimalModalOpen, setLongAnimalModalOpen }) => { 
    const handleClick = () => {
        setLongAnimalModalOpen( isLongAnimalModalOpen=== true ? false: true)
        
    }
    return (
        <>
        <div className={styles.shortAnimalContainer}>
            <img src={getImageURL(smallImg)} alt={name} height="350px" width="auto"/>
            <h2>{name}</h2>
            <h4>{group}</h4>
            <h4>{food}</h4>
            <h4>{found}</h4>
            <p>{description.slice(0,200)} <span className={styles.readMoreBtn} onClick={handleClick}>...Read more</span></p>

        </div>
          
        </>
    )
};

export default ShortAnimal
