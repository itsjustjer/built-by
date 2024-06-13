import './root.css';
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
       <div className="rootDiv">
     
       
        <h1 className="rooth1"> I could teach you, but...</h1>
     
        <section className="rootSectionA">
            <NavLink to="junior"
            className="juniorNavLink">
              June Eeyore
            </NavLink>  
            <NavLink to ="senior"
            className="seniorNavLink">
                Senor Else
                </NavLink> 
        </section>
        <section className="rootSectionB">
            <Outlet/>
        </section>
       </div>
      </>
    );
  };