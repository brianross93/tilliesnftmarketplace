// imports
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import MarketPlace from './components/marketplace/MarketPlace';
import List from './components/list/List';
import Error from './components/Error';
import Footer from './components/footer/footer';



export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/marketplace' element={<MarketPlace />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route element={<Error />}></Route>
       
       
        
  
      </Routes>
      <Footer />
    </div>
  );
}
