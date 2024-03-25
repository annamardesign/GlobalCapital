import './App.css';
import Navigator from './pages/Navigator';
import Article from './pages/Article';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Navigator />} />
        <Route path='/article' element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
