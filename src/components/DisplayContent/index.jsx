import styles from './DisplayContent.module.css'
import { getImageURL } from '../../utils/functions'

const DisplayContent = ({category, setCategory}) => {
    return (
        <>
        <div className={styles.displayContent}>
            
            {category==="home" &&
                <>
                    <img src={getImageURL("animals.jpg")} className={styles.mainImg}/>
                    <h4>WELCOME TO SIDNEY S ZOO</h4>
                    <p>In 100 years Taronga has evolved from a location of entertainment to a mature conservation and education hub.</p>
                    <p>In the spirit of reconciliation, Taronga acknowledges the unique status of Australia’s First Peoples as the original people of this land. We recognise their cultures, histories and ongoing relationship and obligations to the land and waterways.</p>
                </> 
            }

            {category==="mammals" && 
                <>
                    <img src={getImageURL("mammals.jpg")} className={styles.mainImg}/>
                    <h4>Welcome to the mammals</h4>
                    <p>A total of 386 species of mammals have been recorded in Australia and surrounding continental waters: 364 indigenous and 22 introduced. The list includes 2 monotremes, 154 marsupials, 83 bats, 69 rodents (5 introduced), 10 pinnipeds, 2 terrestrial carnivorans (1 recent introduction, and 1 prehistoric introduction), 13 introduced ungulates, 2 introduced lagomorphs, 44 cetaceans and 1 sirenian. The taxonomy and nomenclature used here generally follows Van Dyck and Strahan.</p>
                    </>
            }

            {category==="reptiles" && 
                <>
                    <img src={getImageURL("reptiles.jpg")} className={styles.mainImg}/>
                    <h4>Welcome to the reptiles page</h4>
                    <p>The non-avian reptiles of Australia are a diverse group of animals, widely distributed across the continent. Three of the four reptile orders are represented: Testudines, Squamata and Crocodilia. The only missing extant order is Sphenodontia, containing the tuataras, which are endemic to New Zealand. Australia has over 860 species, a large number in comparison to other continents; for example, North America's total is about 280.The most species-rich group is Squamata, the snakes and lizards. They are especially diverse in the arid areas of Australia, where other fauna are scarcer. Spinifex grass is a major habitat which allows them to remain in a relatively cool, moist area. Australia has a large array of reptiles which can be dangerous to humans. The world's largest reptile, the saltwater crocodile (Crocodylus porosus), is native to the continent's north coastal area.</p>
                </>
            }

            {category==="birds" && 
                <>
                    <img src={getImageURL("birds.png")} className={styles.mainImg}/>
                    <h4>Welcome to the birds page</h4>
                    <p>Australia and its offshore islands and territories have 898 recorded bird species as of 2014. Of the recorded birds, 165 are considered vagrant or accidental visitors, of the remainder over 45% are classified as Australian endemics: found nowhere else on earth. It has been suggested that up to 10% of Australian bird species may go extinct by the year 2100 as a result of climate change.</p>
                    <p>For example, almost any land habitat offers a nice home for a small bird that specialises in finding small insects: the form best fitted to that task is one with long legs for agility and obstacle clearance, moderately-sized wings optimised for quick, short flights, and a large, upright tail for rapid changes of direction. In consequence, the unrelated birds that fill that role in the Americas and in Australia look and act as though they are close relatives.</p>
                </>
            }
        </div>
          
        </>
    )
}

export default DisplayContent
