import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Catering from './components/Catering.jsx';
import About from './components/About.jsx';

 
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
        <Text_title/>
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
function Text_title(){
  return(
      <div className='title'>
          <h1>smallgoods</h1>
          <h3>AMERICAN CHEESES & PROVISIONS</h3>
      </div>
  );
}
