import '../App.css';

import NavigationRow from '../components/NavigationRow';

function Navigator() {
  return (
    <div className='navigator'>
      <main className='navigator__main'>
        <NavigationRow order={1} />
        <NavigationRow order={2} />
        <NavigationRow order={3} />
        <NavigationRow order={4} />
      </main>
    </div>
  );
}

export default Navigator;
