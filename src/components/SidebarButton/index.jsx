import styles from './SidebarButton.module.css'

const SidebarButton = ({name, setShowAnimal}) => {
    const handleClick = () => {
      
        setShowAnimal( name)
        console.log(name)
      

    }

    return (
        <>
          <p className={styles.animalName} onClick={handleClick}>{name}</p>
        </>
    )
}

export default SidebarButton
