import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ContentPageContainer from './pages/contentPage/contentPageContainer';
import MainContainer from './pages/mainContainer';
import MusicContainer from './pages/music/musicContainer';
import OtherContainer from './pages/other/otherContainer';
import PhotographyContainer from './pages/photography/photographyContainer';
import TravelContainer from './pages/travel/travelContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_wrapper'>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/:id' element={<ContentPageContainer />} />
          <Route path='/music' element={<MusicContainer />} />
          <Route path='/photography' element={<PhotographyContainer />} />
          <Route path='/travel' element={<TravelContainer />} />
          <Route path='/other' element={<OtherContainer />} />
          <Route path='/*' element={<MainContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
