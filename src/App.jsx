import './App.css';
import {NavLink, Outlet, } from 'react-router-dom';
import One from './One.jsx';

export default function App() {
  return (
    <>
    <div className="app-box">
      <nav className="nav-bar">
        <NavLink to="one">
          <nav className="navbox">
            <p>1</p>
            </nav>
        </NavLink>
        <NavLink to="two">
          <nav className="navbox">
            <p>2</p>
            </nav>
        </NavLink>
        <NavLink to="three">
          <nav className="navbox">
            <p>3</p>
            </nav>
        </NavLink>
        <NavLink to="four">
          <nav className="navbox">
            <p>4</p>
            </nav>
        </NavLink>
   
      </nav>
      <div className="outlet-box">
        <Outlet/>
      </div>
    </div>
    </>
  );
};