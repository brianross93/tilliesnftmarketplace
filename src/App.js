// imports
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Market from './components/market/Market';
import Create from './components/create/Create';
import Error from './components/Error';
import Mint from './Mint';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/market' element={<Market />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route element={<Error />}></Route>
      </Routes>
      <Mint />
    </div>
  );
}
