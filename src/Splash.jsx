import './root.css';
import { NavLink, Outlet } from "react-router-dom";

export default function Splash() {
    return (
    
       <div className="splashDiv">
        <NavLink to="root"
        className="splash-root-NavLink">
                <h1 className="splash-h1"> The rumors about my milkshake are probably true.
        </h1>
        </NavLink>
    </div>
    );
    };