import styles from './SidebarButton.module.css'

const SidebarButton = ({ showAnimal, setShowAnimal, alreadyClicked, setAlreadyClicked }) => {
    const handleClick = () => {
        if (alreadyClicked === false) {
            setShowAnimal(showAnimal);
            setAlreadyClicked(true);
        } else if (alreadyClicked === true && showAnimal === showAnimal) {
            setShowAnimal(showAnimal);
            setAlreadyClicked(false);
        } else if (alreadyClicked === true && showAnimal !== showAnimal) {
            setShowAnimal(showAnimal);
            setAlreadyClicked(true);
        } 
        console.log(alreadyClicked)
        console.log(showAnimal)
    }

    return (
        <>
          <p className={styles.animalName} onClick={handleClick}>{showAnimal}</p>
        </>
    )
}

export default SidebarButton
