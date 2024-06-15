import './splish.css';
import Kitty from './Kitty.jsx';
import Calcifer from './Calcifer.jsx';
import { NavLink } from 'react-router-dom';
export default function Mind() {
    return (
        <>
        <div className="gapGap">
        <section className="mind-section">
            <NavLink to="mind"
            className="splish-NavLink2">      
Clicky.
            </NavLink>
        </section>
       <div className="gapcalc">
        <h3 className="calch3">oh, so calculating...</h3>
      <Calcifer/> 
       </div>
     
        </div>
        </>
       
    );
};