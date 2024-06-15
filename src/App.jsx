import { useState } from 'react'
import NewChapp from './NewChapp.jsx';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewChapp/>
    </>
  );
};


