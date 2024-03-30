import styles from './DisplayContent.module.css'

const DisplayContent = ({category, setCategory}) => {
    return (
        <>
        <div className={styles.displayContent}>
            <p>DISPLAY CONTENT</p>
            {category==="home" && <p>WELCOME TO SIDNEY S ZOO</p>}
            {category==="mammals" && <p>WELCOME TO mammals</p>}
            {category==="reptiles" && <p>WELCOME TO reptiles</p>}
            {category==="birds" && <p>WELCOME TO birds</p>}
        </div>
          
        </>
    )
};

export default DisplayContent
