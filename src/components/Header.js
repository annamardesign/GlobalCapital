import '../App.css';

function Header() {
  return (
    <header className='header'>
      {/* <img src={logo} className='App__logo' alt='logo' /> */}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='header__link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
