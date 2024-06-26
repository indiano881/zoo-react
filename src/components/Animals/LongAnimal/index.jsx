import Modal from '../../Modal';
import styles from './LongAnimal.module.css'
import {getImageURL} from "../../../utils/functions"

const LongAnimal = ({name, lifespan, group, food, description, found, length, weight, largeImg, hasCloseBtn, isOpen, onClose }) => { 
    return (
        <>
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <div className={styles.longAnimalContainer}>
                <img src={getImageURL(largeImg)} className={styles.animalImg} alt={name} height="auto" width="280px"/>
                <h2>Name: {name}</h2>
                < h4>It belogs to {group} group and has a life expectancy of {lifespan}</h4>
                <h4>The {name} leaves in: {found} and likes to eat {food}</h4>
                <p> Length: {length} Weight {weight}</p>
                <p>{description}</p>
            </div>
        </Modal> 
        </>
    )
}

export default LongAnimal;