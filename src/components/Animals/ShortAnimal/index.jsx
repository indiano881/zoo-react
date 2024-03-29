import styles from './ShortAnimal.module.css'
import {getImageURL} from "../../../utils/functions"

const ShortAnimal = ({name, group, food, description, found, smallImg }) => { {/**smallImg */}
    return (
        <>
        <div className={styles.shortAnimalContainer}>
            <img src={getImageURL(smallImg)} alt={name} height="350px" width="auto"/>
            <h2>{name}</h2>
            <h4>{group}</h4>
            <h4>{food}</h4>
            <h4>{found}</h4>
            <p>{description.slice(0,200)}</p>

        </div>
          
        </>
    )
};

export default ShortAnimal
