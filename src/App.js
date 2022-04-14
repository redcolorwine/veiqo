import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainContainer from './pages/mainContainer';
import Music from './pages/music/music';
import Other from './pages/other/other';
import Photography from './pages/photography/photography';
import Travel from './pages/travel/travel';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_wrapper'>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/photography' element={<Photography />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/other' element={<Other />} />
          <Route path='/*' element={<MainContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
