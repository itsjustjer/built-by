import { useState } from 'react';
import './splish.css';

export default function Click1() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <h2 className="clickedh2">Clicky</h2>
   Click 1 Click 1 Click 1
        </>
    );
};