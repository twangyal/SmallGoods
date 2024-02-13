import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Catering from './components/Catering.js';
import About from './components/About.js';
 
export default function App() {
  return (
    <Router>
      <header>
        <Link to='/'>
          <NavButton name={'Home'}/>
        </Link>
        <Link to='/menu'>
          <NavButton name={'Menu'}/>
        </Link>
        <div className='title-flex'>
          <h1>smallgoods</h1>
          <h2 className='subtitle'>AMERICAN CHEESES & PROVISIONS</h2>
        </div>
        <Link to='/catering'>
          <NavButton name={'Catering'}/>
        </Link>
        <Link to='/about'>
          <NavButton name={'About'}/>
        </Link>
      </header>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/menu' Component={Menu}/>
        <Route path='/catering' Component={Catering}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </Router>
  );
}
function NavButton({name}){
  return(
    <button>{name}</button>
  );
}
function SearchBar(){
  return(
    <input type='text' placeholder='search...'/>
  )
}
