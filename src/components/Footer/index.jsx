import styles from './Footer.module.css'
import { day } from '../../utils/functions';

const Footer = () => {
    return (
        <>
          <footer className={styles.footer}>
            {day===0 && 
              <>
              <h4>Sunday open: 10.00/18.00</h4>
              <h5>Activity: feeding the Quokkas at 12.00</h5>
              </>
            }
            {day===1 && 
              <>
              <h4>Mondays open: 11.00/16.00</h4>
              <h5>10% Student discount all day</h5>
              </>
            }
            {day===2 && 
              <>
              <h4>Tuesdays open: 11.00/16.00</h4>
              <h5>20% Senior discount all day</h5>
              </>
            }
            {day===3 && 
              <>
              <h4>Wendnesday open: 10.30/16.30</h4>
              <h5>Activity: Swim with the Hawksbill turtle at 14.00</h5>
              </>
            }
            {day===4 && 
              <>
              <h4>Thursday open: 10.00/17.30</h4>
              <h5>Activity: feed and play with the Tasmania Devil, at 11.00 and 15.00</h5>
              </>
            }
            {day===5 && 
              <>
              <h4>Fridays open: 10.00/20.30</h4>
              <h5>Activity: pet and feed the Echidnas at 14.00</h5>
              </>
            }
            {day===6 && 
              <>
              <h4>Saturdays open: 10.00/19</h4>
              <h5>Activity: brunch at 11.00 and tiramisu-party at 16.00</h5>
              </>
            }
          </footer>
        </>
    )
};

export default Footer;
