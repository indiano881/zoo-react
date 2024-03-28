import styles from './SidebarButton.module.css'

const SidebarButton = ({name}) => {
    const handleClick = () => {

    }

    return (
        <>
          <p className={styles.animalName}>{name}</p>
        </>
    )
}

export default SidebarButton
