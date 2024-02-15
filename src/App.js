import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Catering from './components/Catering.js';
import About from './components/About.js';

import title from './resources/title.png'
 
export default function App() {
  return (
    <Router>
      <header>
        <Link to='/home'>
          <NavButton name={'Home'}/>
        </Link>
        <Link to='/menu'>
          <NavButton name={'Menu'}/>
        </Link>
        <img alt='title' src={title} width='397px' height='102px' flex-shrink='0'/>
        <Link to='/catering'>
          <NavButton name={'Catering'}/>
        </Link>
        <Link to='/about'>
          <NavButton name={'About'}/>
        </Link>
      </header>
      <Routes>
        <Route path='/home'  Component={Home}/>
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

