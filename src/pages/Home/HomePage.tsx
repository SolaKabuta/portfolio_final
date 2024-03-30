import arrowDown from '../../assets/icons/arrow-down.svg'


import {useState, useEffect} from 'react';
import './Home.css'

// import {isMotionValue} from "framer-motion";

const HomePage = () => {
    const [helloText, setHelloText] = useState('Hello');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHelloText(prevText => prevText === 'Hello' ? 'Bonjour' : 'Hello');
        }, 3000); // Change every second

        return () => clearInterval(intervalId); // Cleanup function
    }, []);


    const [designer, setDesigner] = useState('Designer');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDesigner(prevText => prevText == 'Designer' ? 'Dreamer': 'Designer');
        }, 3050); // Change every second

        return () => clearInterval(intervalId); // Cleanup function
    }, []);

    return (
        <>
            <div
                className={'main'}>
                        <div>
                            <div>
                                <h1>
                                    <span id={'hello'}>{helloText}.</span>
                                    <br/>
                                    I'm
                                    <span className={'Sola'}>Sola</span>.
                                    <span className={'Shola'}>(Sho.la)</span>
                                </h1>
                                <p
                                    className={'main-title'}>
                                    Web developer <br/>
                                    <span className={''}>& {designer}.</span>
                                </p>
                                    <p
                                        className={'main-text'}>
                                        <span>Each pixel holds a story, each line of code a puzzle begging to be solved</span>. <br/>
                                        <span>I'm a developer who sees design as the brushstroke, and a designer who finds elegance in the logic</span>. <br/>
                                        <span>Come explore my creations, and let's build something amazing together</span>.
                                    </p>
                            </div>
                        </div>
                    </div>
                <div
                    className={'main-bottom'}>
                    <p>
                        <span>last update&nbsp;</span>
                        <span>- March 2024</span>
                    </p>
                    <p>
                        <span>Brussels -&nbsp;</span>
                        <span>Belgium -&nbsp;</span>
                        <span>50.8466 -&nbsp;</span>
                        <span>4.3528</span>
                    </p>
                </div>
                <div>
                    <a
                        href="#Work">
                        <img
                            className={'arrow'}
                            src={arrowDown}
                            loading="lazy"
                            alt="arrow down"/>
                    </a>
            </div>
        </>
    );
};

export default HomePage;