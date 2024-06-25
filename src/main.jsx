import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import One from './One.jsx';
import Two from './Two.jsx';
import Three from './Three.jsx';
import Four from './Four.jsx';

import './index.css'
import {createBrowserRouter, RouterProvider, } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "one",
        element: <One/>,
      },
      {
        path: "two",
        element: <Two/>,
      },
      {
        path: "three",
        element: <Three/>,
      },
      {
        path: "four",
        element: <Four/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider to router={router}/>
  </React.StrictMode>,
);
