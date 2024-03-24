// import Portrait from '../assets/portrait_opti.jpg'
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [helloText, setHelloText] = useState('Hello');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHelloText(prevText => prevText === 'Hello' ? 'Bonjour' : 'Hello');
        }, 3000); // Change every second

        return () => clearInterval(intervalId); // Cleanup function
    }, []); // Empty dependency array to run effect only once on component mount
    return (
        <>
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
                        id={'hello'}>
                        {helloText}.
                    </span>
                        <br/>
                        I'm
                        Sola.
                        <span
                            className={'pl-2 text-lg'}>
                        (Sho.la)
                        </span>
                        {/*<br/> Kabuta*/}
                    </h1>
                    <p
                        className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                    Web developer <br/>
                        <span
                            className={'text-8xl'}>
                            & designer.
                        </span>
                    </p>
                    <p
                        className={'ease-in-out duration-1000 hover:scale-[1.05]'}>
                        Each pixel holds a story, each line of code a puzzle begging to be solved. <br/>
                        I'm a developer who sees design as the brushstroke, and a designer who finds elegance in the
                        logic. <br/>
                        Come explore my creations, and let's build something amazing together.
                    </p>
                </div>
                <div
                    className={'pt-44 uppercase flex justify-between gap-5'}>
                    <p
                        className={'ease-in-out duration-1000 hover:scale-110'}>
                        last updated - March 2024
                    </p>
                    <p
                        className={'ease-in-out duration-1000 hover:scale-110'}>
                        Brussels -
                        Belgium -
                        50.8466 -
                        4.3528
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomePage;