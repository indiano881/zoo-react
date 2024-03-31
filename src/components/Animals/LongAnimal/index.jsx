import styles from './LongAnimal.module.css'
import {getImageURL} from "../../../utils/functions"
const LongAnimal = ({name, lifespan, group, food, description, found, heigth, weight, largeImg }) => { 
    return (
        <>
        <div className={styles.longAnimalContainer}>
        <img src={getImageURL(largeImg)} alt={name} height="450px" width="auto"/>
            <h2>Name: {name}</h2>
            <h4>Belogs to {group} group</h4>
            <h4>Life expectancy is : {lifespan}</h4>
            <h4>The {name} likes to eat {food}</h4>
            <h4>Leaves in : {found}</h4>
            <p> Height: {heigth}</p>
            <p> Weight {weight}</p>
            <p>{description}</p>

        </div>
          
        </>
    )
};

export default LongAnimal;