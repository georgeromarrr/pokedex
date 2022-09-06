import './style/App.css';
import { Routes, Route } from 'react-router';
import axios from 'axios'

// pages
import Home from './Pages/Home/Home';
import Pokemon from './Pages/Pokemon/Pokemon';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemon/:name' element={<Pokemon/>}/>
    </Routes>
    </>
  );
}

export default App;
