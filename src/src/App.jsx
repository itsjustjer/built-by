import React, { useState } from 'react'
import './App2.css'
import './App.css'
import Calcifer from './Calcifer.jsx';
import Box2 from './Box2.jsx';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
  <div className="appMain">
    <h1> This is appMain</h1>
      <div className="outerWrapper">  
{/* this is row 1 */}
      <div className="calciferBox"><Calcifer/></div>
      <div className="panelBubble">Panel Bubble</div>

      <div className="panels">
        <h1> This is Panels</h1>
        <div className="panel2">
            <h2>Panel 1</h2>
            <Panel
              title="Question"
              isActive={activeIndex === 0}
              onShow={() => setActiveIndex(0)}
            >
              Why did the chicken cross the road?
            </Panel>
              <Panel
                title="Answer"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
              >
                i don't know, I'm a %$@!ing turtle. 
              </Panel>  
                <div className="explanation1">This is the explanation.</div>
        </div>
        <div className="description1">
          <h3> Description </h3>
          <p>This is the description</p>
        </div>
        </div>
        </div>
        <div className="newbox">
          <h1>This is newbox</h1>
          <div className="newboxCard">
            <h2>This is newboxCard</h2>
            <p>Axios </p>
            <p>Formik </p>
            <p>react-redux </p>
            <p> dotenv </p>
            <p> esLint </p>
            <p> sweetalert styled-components react-tooltip</p>
            </div>
        </div>
 </div>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel1">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

