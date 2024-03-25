import '../App.css';
import logo from '../logo.svg';
import search from '../search.svg';
import DropdownMenu from '../components/DropdownMenu';
import { Link } from 'react-router-dom';

function NavigationRow({ order }) {
  const dataMenuItems = [
    'IPO Pipeline',
    'Priced deals',
    'People Tracker',
    'Top borrowers',
    'Primary Market Monitor',
  ];

  return (
    <section className={`navigator__main--row-${order}`}>
      <nav className='navigator__main__top'>
        <div className='navigator__main__links__top'>
          <Link to='/article'>Global Capital</Link>
          <Link to=''>Securitization</Link>
          <Link to=''>Global Markets</Link>
        </div>
        <div className='navigator__main__buttons'>
          <img src={search} className='search' alt='search' />
          <button className='button button--light'>Pricing</button>
          <button className='button button--grey'>Free Trial</button>
          <button className='button button--outlined'>Login</button>
        </div>
      </nav>
      <span className='menu__decoration'></span>
      <nav className='navigator__main__bottom'>
        <div className='navigator__main__logo'>
          {' '}
          <img src={logo} className='logo' alt='logo' />
        </div>
        <div className='nav-btn'></div>
        <div className='navigator__main__links__bottom'>
          <Link to=''>Markets</Link>
          <Link to=''>People and Markets</Link>
          <DropdownMenu name={'Data'} menuItems={dataMenuItems} order={order} />
          <Link to=''>Podcasts</Link>
          <Link to=''>Special Reports</Link>
          <Link to=''>Awards</Link>
          <Link to=''>GC Live</Link>
          <Link to=''>League Tables</Link>
          <Link to=''>The Weekly</Link>
        </div>
      </nav>
    </section>
  );
}

export default NavigationRow;
