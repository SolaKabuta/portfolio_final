// import Portrait from '../assets/portrait_opti.jpg'
import rectangle from '../assets/Rectangle 7.svg'
// import developer from '../assets/developer.png'




import { useState, useEffect } from 'react';

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
            setDesigner(prevText => prevText === 'Designer' ? 'Dreamer' : 'Designer');
        }, 3050); // Change every second

        return () => clearInterval(intervalId); // Cleanup function
    }, []);

    return (
        <>
            <div
                className={'flex justify-center align-middle'}>
                <div
                    className={'w-screen h-screen py-[10%] px-[10%] background_anim'}>
                    {/*<div*/}
                    {/*    className={'rounded-3xl'}>*/}
                    {/*    <img*/}
                    {/*        className={'scale-[0.2] absolute z-0 -top-[58%] left-0 right-0'}*/}
                    {/*        src={Portrait}*/}
                    {/*        alt=""/>*/}
                    {/*</div>*/}
                    <div
                        className={'hero_text grid place-content-baseline uppercase'}>

                        <h1 className={'text-6xl pb-20 ease-in-out duration-1000 hover:scale-110'}>
                    <span
                        className={''}
                        id={'hello'}>
                        {helloText}.
                    </span>
                            <br/>
                            I'm
                            <span
                                className={'text-orange-600 pl-2'}>
                                Sola
                            </span>.
                            <span
                                className={'pl-2 text-lg animate-pulse'}>
                        (Sho.la)
                        </span>
                            {/*<br/> Kabuta*/}
                        </h1>
                        <p
                            className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                            Web developer <br/>
                            <span
                                className={'text-8xl'}>
                            & {designer}.
                        </span>
                            {/*<img*/}
                            {/*    className={'scale-[0.6] relative -top-[23vw]'}*/}
                            {/*    src={developer}*/}
                            {/*    alt=""/>*/}
                        </p>
                        <p
                            className={'ease-in-out duration-1000 hover:scale-[1.05]'}>
                            Each pixel holds a story, each line of code a puzzle begging to be solved. <br/>
                            I'm a developer who sees design as the brushstroke, and a designer who finds elegance in the
                            logic. <br/>
                            Come explore my creations, and let's build something amazing together.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className={'w-[600px] relative top-72 right-36'}
                        src={rectangle}
                        alt="rectangle shape"/>
                    <img
                        className={'w-[200px] relative top-44 right-64'}
                        src={rectangle}
                        alt="rectangle shape"/>
                </div>
            </div>
            <div
                className={'uppercase flex justify-between gap-5 px-[10%] relative bottom-44'}>
                <p
                    className={'ease-in-out duration-1000 hover:scale-110 orange'}>
                    last updated - March 2024
                </p>
                <p
                    className={'ease-in-out duration-1000 hover:scale-110 orange'}>
                    Brussels -
                    Belgium -
                    50.8466 -
                    4.3528
                </p>
            </div>
        </>
    );
};

export default HomePage;