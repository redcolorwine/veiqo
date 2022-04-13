import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_wrapper'>
        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
