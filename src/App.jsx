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
        <Link to='/mysite'>
          <NavButton name={'Home'}/>
        </Link>
        <Link to='/menu'>
          <NavButton name={'Menu'}/>
        </Link>
        <TextTitle/>
        <Link to='/catering'>
          <NavButton name={'Catering'}/>
        </Link>
        <Link to='/about'>
          <NavButton name={'About'}/>
        </Link>
      </header>
      <Routes>
        <Route path='/mysite'  Component={Home}/>
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
function TextTitle(){
  return (
    <div className='title'>
      <h1 style={{ fontWeight: "normal", fontSize: "40px", color: "green" }}>
        small<span style={{ fontWeight: 'bold' }}>goods</span>
      </h1>
      <h2 style={{ fontSize: '14px', fontWeight: '200', marginTop: '-20px', color: 'green' }}>
        AMERICAN CHEESES & PROVISIONS
      </h2>
    </div>
  );
}