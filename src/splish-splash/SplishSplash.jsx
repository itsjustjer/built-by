import './splish.css';
import { NavLink, Outlet } from "react-router-dom";
import Clicked from './Clicked.jsx';


let kitty ="fuck-nah";

export default function SplishSplash() {
    return (
    <>
       <div className="splishsplashDiv">
    <NavLink to="the"
    className="clicked-NavLink">
        <section className="mind-section">
            <Clicked/>
        </section>
        </NavLink>
        <section className="outlet-section">  
      <Outlet/>
        </section>
        <section className="gap-section">
        <div className="buttonBox-mind">
            <NavLink to="clicky"
            className="clickyclick">
                  <section className="sectionLink">
        1
        </section>
            </NavLink>
       <section className="sectionLink">
        1
        </section>
        <section className="sectionLink">
        2
        </section>
        <section className="sectionLink">
        3
        </section>
        <section className="sectionLink">
        4
        </section>
        </div>
     
        </section>
    </div>
    </>
    );
    };