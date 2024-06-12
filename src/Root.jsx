import './root.css';
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
       <div className="rootDiv">
        <section className="rootSectionA">
            <NavLink to="junior"
            className="juniorNavLink">
                Junior
            </NavLink>  
            <NavLink to ="senior"
            className="seniorNavLink">
                Senior 
                </NavLink> 
        </section>
        <h1 className="rooth1"> I'm just going to get this one chance...</h1>
        <section className="rootSectionB">
            <Outlet/>
        </section>
       </div>
      </>
    );
  };