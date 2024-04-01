import styles from './SidebarButton.module.css'

const SidebarButton = ({ showAnimal, setShowAnimal, alreadyClicked, setAlreadyClicked }) => {
    const handleClick = () => {
        if (alreadyClicked === false) {
            setShowAnimal(showAnimal);
            setAlreadyClicked(true);
        } else if (alreadyClicked === true && showAnimal === showAnimal) {
            setShowAnimal(null);
            setAlreadyClicked(false);
        } else if (alreadyClicked === true) {
            setShowAnimal(showAnimal);
            setAlreadyClicked(false);
        }
    }

    return (
        <>
          <p className={styles.animalName} onClick={handleClick}>{showAnimal}</p>
        </>
    )
}

export default SidebarButton
