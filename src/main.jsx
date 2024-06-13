import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Junior from './Junior.jsx';
import Senior from './Senior.jsx';
import Splish from './splish-splash/Splish.jsx';
import Splash from './Splash.jsx';
import SplishSplash from './splish-splash/SplishSplash.jsx';
import Mind from './splish-splash/Mind.jsx';
import Gap from './splish-splash/Gap.jsx';
import The from './splish-splash/The.jsx';
import App from './App.jsx'
import './index.css'
import Root from "./Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splish />,
  },
  {path: "splishsplash",
    element: <SplishSplash />,
      children: [
        {
          path: "mind",
          element: <Mind />,
        },
        {
          path: "the",
          element: <The />,
        },
        {
          path: "gap",
          element: <Gap />,
        },
      ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
