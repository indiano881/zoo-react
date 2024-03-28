import styles from './ShortAnimal.module.css'

const ShortAnimal = ({name, group, food, description, found }) => { {/**smallImg */}
    return (
        <>
        <div className={styles.shortAnimalContainer}>
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
