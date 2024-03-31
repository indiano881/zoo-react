import styles from './SidebarButton.module.css'

const SidebarButton = ({showAnimal, setShowAnimal}) => {
    const handleClick = () => {
        setShowAnimal( null ? showAnimal : showAnimal)
        console.log(showAnimal)
        showAnimal=null
    }

    return (
        <>
          <p className={styles.animalName} onClick={handleClick}>{showAnimal}</p>
        </>
    )
}

export default SidebarButton
