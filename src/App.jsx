import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Tovar from './pages/Tovar';
import Carta from './pages/Carta';
import Cartag from './pages/Cartag';
import Carter from './pages/Carter';
import Cartap from './pages/Cartap';
import Cartaf from './pages/Cartaf';
import Corzina from './pages/Corzina';
import Oplata from './pages/Oplata';
import Arza from './pages/Arza';
import News from './pages/News';
import Newr from './pages/Newr';
import Contacts from './pages/contacts';
import Costum from './pages/Costum';
import Jinze from './pages/Jinze';
import Bruki from './pages/Bruki';
import Footbolka from './pages/Footbolka';
import Cros from './pages/Cros';
import Rubashka from './pages/Rubashka';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";







const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>
},
{
  path: "shop",
  element: <Shop/>
},
{
  path: "Tovar",
  element: <Tovar/>
},
{
  path: "/Carta",
  element: <Carta/>
},
{
  path: "/Cartag",
  element: <Cartag/>
},
{
  path: "/Carter",
  element: <Carter/>
},
{
  path: "/Cartap",
  element: <Cartap/>
},
{
  path: "/Cartaf",
  element: <Cartaf/>
},
{
  path: "/Corzina",
  element: <Corzina/>
},
{
  path: "/Oplata",
  element: <Oplata/>
},
{
  path: "/Arza",
  element: <Arza/>
},
{
  path: "/Newss",
  element: <News/>
},
{
  path: "/Nya",
  element: <Newr/>
},
{
  path: "/Nyah",
  element: <Contacts/>
},
{
  path: "/Net",
  element: <Costum/>
},
{
  path: "/Jinze",
  element: <Jinze/>
},
{
  path: "/Bruki",
  element: <Bruki/>
},
{
  path: "/Bruki",
  element: <Bruki/>
},
{
  path: "/Foot",
  element: <Footbolka/>
},
{
  path: "/Cros",
  element: <Cros/>
},
{
  path: "/Cro",
  element: <Rubashka/>
},
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App