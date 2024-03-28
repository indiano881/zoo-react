import styles from './LongAnimal.module.css'

const LongAnimal = ({name, lifespan, group, food, description, found, heigth, weight }) => { {/**smallImg */}
    return (
        <>
        <div className={styles.longAnimalContainer}>
            <h2>{name}</h2>
            <h4>{group}</h4>
            <h4>{lifespan}</h4>
            <h4>{food}</h4>
            <h4>{found}</h4>
            <p>{description}</p>
            <p>{heigth}</p>
            <p>{weight}</p>

        </div>
          
        </>
    )
};

export default LongAnimal;