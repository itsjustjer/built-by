import { useState } from 'react'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="appDiv">
      <header>
      <h1> This is my Netlify Test Page!!!</h1>
      </header>
      <main>
      <section className="sectionBubble1"></section>
      <section className="section1App"> 
        <h2>The squirrels</h2>
        <img src="../public/assets/squirrelsSVG.svg" alt="squirrels" width="400px" height="350px"></img>
        </section>
        <section className="section2App">
        <h2>The girls</h2>
        <img src="../public/assets/girlsSVG.svg" alt="girls" width="400px" height="350px"></img>
        </section>
        <section className="section3App">
          <h2>The Merls</h2>
        <img src="../public/assets/merlsSVG.svg" alt="merls" width="400px" height="350px"></img>
        </section>
        <section className="section4App">
          <h2>The Pearls</h2>
          <img src="../public/assets/pearlsSVG.svg" alt="pearls" width="400px" height="350px"></img>
        </section>
        <section className="sectionBubble2"></section>
      </main>
      <footer>builtbyjer.com</footer>
     </div>
    </>
  );
};


