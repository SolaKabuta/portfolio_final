// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";



import './App.css'
import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import Work from "./pages/Work.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Navbar/>
            <HomePage/>
            <Work/>
        </div>
    </>
  )
}

export default App
