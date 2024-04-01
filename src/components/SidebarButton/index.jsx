import styles from './SidebarButton.module.css'

const SidebarButton = ({ showAnimal, setShowAnimal, alreadyClicked, setAlreadyClicked }) => {
    const handleClick = () => {
        if (!alreadyClicked) {
            setShowAnimal(showAnimal);
            setAlreadyClicked(showAnimal);
        } else if (alreadyClicked && alreadyClicked===showAnimal) {
            setShowAnimal(null);
            setAlreadyClicked(false);
       } else if (alreadyClicked && alreadyClicked!==showAnimal) {
        setShowAnimal(showAnimal)
        setAlreadyClicked(showAnimal)
       }
    }

    return (
        <>
          <p className={styles.animalName} onClick={handleClick}>{showAnimal}</p>
        </>
    )
}

export default SidebarButton
