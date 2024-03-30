import styles from './SidebarButton.module.css'

const SidebarButton = ({showAnimal, setShowAnimal}) => {
    const handleClick = () => {
        setShowAnimal( showAnimal === null ? showAnimal : showAnimal)
        showAnimal=null;
       
       
    }

    return (
        <>
          <p className={styles.animalName} onClick={handleClick}>{showAnimal}</p>
        </>
    )
}

export default SidebarButton
