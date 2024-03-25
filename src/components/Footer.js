import '../App.css';
import logo from '../img/logo.svg';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';

function Footer() {
  return (
    <div className='footer'>
      <nav className='footer__nav'>
        <img src={logo} className='social__logo--two' alt='logo' />
        <div className='footer__column'>
          <img src={logo} className='social__logo--one' alt='logo' />
          <div className='social__container--one'>
            Follow us on: &nbsp;{' '}
            <img src={facebook} className='social' alt='facebook' />{' '}
            <img src={linkedin} className='social' alt='linkedin' />
            <img src={twitter} className='social' alt='twitter' />
          </div>
        </div>

        <div className='footer__column'>
          <h3>About</h3>
          <li>About us</li>
          <li>Contact us us</li>
          <li>Feedback</li>
        </div>
        <div className='footer__column'>
          <h3>Services</h3>
          <li>Advertise</li>
          <li>Our partners</li>
          <li>GlobalCapital Events</li>
          <li>Social community</li>
        </div>
        <div className='footer__column'>
          <h3>My Account</h3>
          <li>Subscribe</li>
          <li>FAQ</li>
          <li>Renew</li>
        </div>
        <div className='footer__column hide-mobile'>
          <h3>More Items</h3>
          <li>About us</li>
          <li>Contact us us</li>
          <li>Feedback</li>
          <li>Advertise</li>
          <li>Our partners</li>
          <li>FAQ</li>
          <li>Subscribe</li>
        </div>
        <div className='footer__column hide-mobile'>
          <h3>Six</h3>
          <li>Advertise</li>
          <li>Our partners</li>
          <li>GlobalCapital Events</li>
        </div>
      </nav>
      <div className='social__container--two'>
        Follow us on: &nbsp;{' '}
        <img src={facebook} className='social' alt='facebook' />{' '}
        <img src={linkedin} className='social' alt='linkedin' />
        <img src={twitter} className='social' alt='twitter' />
      </div>
      <div className='footer__disclaimer'>
        <p>
          Insurance Insider is part of the Delinian Group, Delinian Limited, 4
          Bouverie Street, London, EC4Y 8AX, <br />
          Registered in England & Wales, Company number 00954730
        </p>
        <p>
          Accessibility | Terms of Use | Privacy Policy | Modern Slavery
          Statement | Cookies Settings
        </p>
      </div>
    </div>
  );
}

export default Footer;
