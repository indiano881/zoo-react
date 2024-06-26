import { useState } from 'react';
import Sidebar from '../Sidebar';
import DisplayContent from '../DisplayContent';
import ShortAnimal from "../Animals/ShortAnimal";
import LongAnimal from "../Animals/LongAnimal";
import styles from './MainContent.module.css';
import { allAnimalArray } from '../../data/data'; 


const MainContent = ({showAnimal, setShowAnimal, category, setCategory, alreadyClicked, setAlreadyClicked}) => {
  const [isLongAnimalModalOpen, setLongAnimalModalOpen] = useState(false);
  
  const handleClickCloseBtn = () => {
    setLongAnimalModalOpen(false)
  }

    return (
        <>
          <section className={styles.mainContent}>
            <Sidebar setShowAnimal={setShowAnimal} category={category} setCategory={setCategory} alreadyClicked={alreadyClicked} setAlreadyClicked={setAlreadyClicked}/>
            {!showAnimal && <DisplayContent category={category} setCategory={setCategory}/>}
            {(showAnimal ) &&  allAnimalArray.filter(item=> item.name=== showAnimal).map((item, index)=> <ShortAnimal  key={index} {...item} isLongAnimalModalOpen={isLongAnimalModalOpen} setLongAnimalModalOpen={setLongAnimalModalOpen} setCategory={setCategory} setShowAnimal={setShowAnimal}/>)}
            {isLongAnimalModalOpen===true && allAnimalArray.filter(item=> item.name=== showAnimal).map((item, index)=> <LongAnimal {...item} key={index} isOpen={isLongAnimalModalOpen} onClose={handleClickCloseBtn}/>)}
          </section>
        </>
    )
}

export default MainContent;
