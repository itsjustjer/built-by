import './splish.css';
import { NavLink, Outlet } from "react-router-dom";

export default function Splish() {
    return (
    
       <div className="splishDiv">
        <NavLink to="splishsplash"
        className="splish-NavLink">
                <h1 className="splish-h1"> 
                The<br/>
                 wait <br/>
                 is<br/>
                  finally<br/>
                   over...<br/>
                   
        </h1>
        </NavLink>
    </div>
    );
    };