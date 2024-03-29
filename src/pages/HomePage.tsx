// import Portrait from '../assets/portrait_opti.jpg'
// import scroll from '../assets/shapes/scroll_down_colors.png'
import arrowDown from '../assets/icons/arrow-down.svg'
// import rectangle from '../assets/Rectangle 7.svg'


import {useState, useEffect} from 'react';

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
            setDesigner(prevText => prevText == 'Designer' ? 'Dreamer' || 'Photographer': 'Designer');
        }, 3050); // Change every second

        return () => clearInterval(intervalId); // Cleanup function
    }, []);

    return (
        <>
            <div
                className={'flex justify-center align-middle'}>
                <div
                    className={'w-screen h-screen py-[10%] px-[10%]'}>
                    <div
                        className={'flex justify-between'}>
                        <div
                            className={'hero_text uppercase'}>

                            <h1 className={'text-6xl pb-20 ease-in-out duration-1000 hover:scale-110 hover:-rotate-2'}>
                                <span className={''} id={'hello'}>{helloText}.</span>
                                <br/>
                                I'm
                                <span className={'text-orange-600 pl-2'}>Sola</span>.
                                <span className={'pl-2 text-lg animate-pulse'}>(Sho.la)</span>
                                {/*<br/> Kabuta*/}
                            </h1>
                            <p
                                className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05] hover:-rotate-2'}>
                                Web developer <br/>
                                <span className={''}>& {designer}.</span>
                            </p>
                            <p
                                className={'ease-in-out duration-1000 hover:scale-[1.05] hover:-rotate-2'}>
                                <span className={'orange'}>Each pixel holds a story, each line of code a puzzle begging to be solved</span>. <br/>
                                <span className={'orange'}>I'm a developer who sees design as the brushstroke, and a designer who finds elegance in the logic</span>. <br/>
                                <span className={'orange'}>Come explore my creations, and let's build something amazing together</span>.
                            </p>
                        </div>
                    </div>
                </div>
                {/*PORTRAIT SHAPES*/}
                {/*<div>*/}
                {/*    <img*/}
                {/*        className={'w-[600px] relative top-72 right-36 portrait'}*/}
                {/*        src={rectangle}*/}
                {/*        alt="rectangle shape"/>*/}
                {/*    <img*/}
                {/*        className={'w-[200px] relative top-44 right-64'}*/}
                {/*        src={rectangle}*/}
                {/*        alt="rectangle shape"/>*/}
                {/*</div>*/}
                {/*PORTRAIT*/}
                {/*<div*/}
                {/*    className={'mask'}>*/}
                {/*    <img*/}
                {/*        className={'scale-[0.2]'}*/}
                {/*        src={Portrait}*/}
                {/*        alt=""/>*/}
                {/*</div>*/}

            </div>
            <div
                className={'hero_footer uppercase flex justify-between gap-5 px-[10%] relative bottom-52 pt-20'}>
                <p
                    className={'ease-in-out duration-1000 hover:scale-110'}>
                    <span className={'orange'}>last update&nbsp;</span>
                    <span className={'orange'}>- March 2024</span>
                </p>
                <p
                    className={'ease-in-out duration-1000 hover:scale-110'}>
                    <span className={'orange'}>Brussels -&nbsp;</span>
                    <span className={'orange'}>Belgium -&nbsp;</span>
                    <span className={'orange'}>50.8466 -&nbsp;</span>
                    <span className={'orange'}>4.3528</span>
                </p>
            </div>
            <div
                className={''}>
                {/*<a*/}
                {/*    href="#Work">*/}
                {/*    <img*/}
                {/*    className={'scale-[0.15] rotate-btn absolute top-[30vw] left-[31.8vw]'}*/}
                {/*    src={scroll}*/}
                {/*    alt="scroll down button"/>*/}
                {/*</a>*/}
                <a
                    href="#Work">
                    <img
                        className={'absolute left-[50%] bottom-10 animate-bounce hover:animate-ping'}
                        src={arrowDown}
                        alt="arrow down"/>
                </a>
            </div>
        </>
    );
};

export default HomePage;