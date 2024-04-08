import BuyTicket from '../BuyTicket';
import FooterMessages from './FooterMessages';
import styles from './Footer.module.css';
import { day } from '../../utils/functions';

const Footer = () => {
    return (
        <>
          <footer className={styles.footer}>
            <BuyTicket />
            {day===0 && <FooterMessages openingHours="Sunday open: 10.00/18.00" activity="Activity: feeding the Quokkas at 12.00" />}
            {day===1 && <FooterMessages openingHours="Mondays open: 11.00/16.00" activity="10% Student discount all day" />}
            {day===2 && <FooterMessages openingHours="Tuesdays open: 11.00/16.00" activity="20% Senior discount all day" />}
            {day===3 && <FooterMessages openingHours="Wendnesday open: 10.30/16.30" activity="Activity: Swim with the Hawksbill turtle at 14.00" />}
            {day===4 && <FooterMessages openingHours="Thursday open: 10.00/17.30" activity="Activity: play with the Tasmania Devil at 11.00" />}
            {day===5 && <FooterMessages openingHours="Fridays open: 10.00/20.30" activity="Activity: pet and feed the Echidnas at 14.00" />}
            {day===6 && <FooterMessages openingHours="Saturdays open: 10.00/19" activity="Activity: brunch at 11.00 with unlimited tiramisu´" />}
          </footer>
        </>
    )
}

export default Footer;
