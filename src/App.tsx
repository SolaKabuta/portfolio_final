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
import HorizontalScrollCarousel from "./components/UI/HorizontalScrollCarousel.tsx";
// import Footer from "./components/Footer.tsx";
// import Home_btn from "./components/home_btn.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {/*<div*/}
        {/*        className={'sticky'}>*/}
        {/*        <Home_btn/>*/}
        {/*</div>*/}
        <div
            className={'nocursor'}>
            <MouseTrail className={'mix-blend-difference'} strokeColor={"#ff5722"} lineWidthStart={20} lag={0.7} lineDuration={2}/>
            <Navbar/>
            <HomePage/>
            <Work/>
            <HorizontalScrollCarousel/>
            <About/>
            <Contact/>
        </div>
    </>
  )
}

export default App
