import React, { Suspense } from 'react';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import logo from './assets/icons/logo/logo_white.svg'

// Lazy load components
const LazyHomePage = React.lazy(() => import('./pages/Home/HomePage'));
const LazyWork = React.lazy(() => import('./pages/Work/Work'));
const LazyAbout = React.lazy(() => import('./pages/About/About'));
const LazyContact = React.lazy(() => import('./pages/Contact/Contact'));
const LazyHorizontalScrollCarousel = React.lazy(() => import('./components/Features/WorkCarousel/HorizontalScrollCarousel'));

function App() {
    return (
        <>
            <div className="nocursor">
                {/* Suspense component to display a fallback while components are loading */}
                <Suspense fallback={<div className={'w-screen h-screen grid place-content-center  animate-pulse bg-black'}>
                    <img src={logo} alt=""/></div>}>
                    <MouseTrail className={'mix-blend-difference'} strokeColor={"#ff5722"} lineWidthStart={20} lag={0.7} lineDuration={2}/>
                    <Navbar />
                    <LazyHomePage />
                    <LazyWork />
                    <LazyHorizontalScrollCarousel />
                    <LazyAbout />
                    <LazyContact />
                </Suspense>
            </div>
        </>
    );
}

export default App;
