import '../App.css';
import logo from '../logo.svg';
import search from '../search.svg';
import DropdownMenu from '../components/DropdownMenu';

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
          <a>Global Capital</a>
          <a>Securitization</a>
          <a>Global Markets</a>
        </div>
        <div className='navigator__main__buttons'>
          <button className='search'>
            {' '}
            <img src={search} className='search-icon' alt='search' />
          </button>
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
        <div className='navigator__main__links__bottom'>
          <a>Markets</a>
          <a>People and Markets</a>
          <DropdownMenu name={'Data'} menuItems={dataMenuItems} order={order} />
          <a>Podcasts</a>
          <a>Special Reports</a>
          <a>Awards</a>
          <a>GC Live</a>
          <a>League Tables</a>
          <a>The Weekly</a>
        </div>
      </nav>
    </section>
  );
}

export default NavigationRow;
