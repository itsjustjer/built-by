import './splish.css';
import { NavLink, Outlet } from "react-router-dom";
let kitty ="fuck-nah";
export default function SplishSplash() {
    return (
    <>
       <div className="splishsplashDiv">
        <section className="mind-section">
            <NavLink to="mind"
            className="splish-NavLink">      
Mind The Gap.
            </NavLink>
        </section>
      
        <section className="outlet-section">
           
      <Outlet/>
        </section>
        <section className="gap-section">
            <NavLink to="gap"
            className="splish-NavLink">      
Pick the kitty icon. The {kitty} one. Pick that one.<br/>
Do it.
            </NavLink>
        </section>
    </div>
    </>
    );
    };