// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// Mouse trail
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";


import './App.css'
import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div
            className={'nocursor'}>
            <MouseTrail strokeColor={"#ff5722"} lineWidthStart={20} lag={0.7} lineDuration={2}/>
            <Navbar/>
            <HomePage/>
            <Work/>
            <About/>
            <Contact/>
        </div>
    </>
  )
}

export default App
