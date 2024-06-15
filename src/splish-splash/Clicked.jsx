import { useState } from 'react';
import './splish.css';
import Panel from "./Panel.jsx";
import The from './The.jsx';
export default function Clicked() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <h2 className="clickedh2">Clicky</h2>
        <The/>
        <Panel
          title="clicky-clicked"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
         
        </Panel>
        </>
    );
};