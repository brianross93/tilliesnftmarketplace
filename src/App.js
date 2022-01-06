// imports
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Market from './components/market/Market';
import Create from './components/create/Create';
import Error from './components/Error';
import LoginSetup from './LoginSetup';
import Mint from './Mint';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/market" component={Market} />
        <Route path="/create" component={Create} />
        <Route component={Error} />
      </Routes>
      <LoginSetup />
      <Mint />
    </div>
  );
}
