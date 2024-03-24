// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// Mouse trail
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";


import './App.css'
import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import Work from "./pages/Work.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <MouseTrail strokeColor={"#ff5722"} lineWidthStart={20}/>
            <Navbar/>
            <HomePage/>
            <Work/>
        </div>
    </>
  )
}

export default App
