// import Home_btn from "../components/home_btn.tsx";

import EmblaCarousel from "../components/EmblaCarousel.tsx";

const Work = () => {



    return (
        <>
         <div
            className={'w-screen h-screen py-[5%] px-[10%]'}>
             <div
                className={'uppercase grid place-content-baseline'}>
                 <h2
                     id={'Work'}
                     className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05] hover:-rotate-2'}>
                     <span className={'text-orange-600'}>Work</span> <br/>
                     <span>&<span>&nbsp;Playground</span>.
                     </span>
                 </h2>
                 <p
                    className={'hero-txt ease-in-out duration-1000 hover:scale-[1.05] hover:-rotate-2'}>
                     <span>From elegant websites for small businesses to dynamic web applications for startups, (or for a training purpose)</span>.<br/>
                     <span>each project embodies my passion for creativity, innovation, and excellence in web development</span>. <br/>
                     <span>Whether you're evaluating my skills, or simply curious to see my work</span>, <br/>
                     <span>this page serves as a window into my journey as both a web developer and a designer</span>. <br/>
                     <span>Take a moment to browse through these projects and witness firsthand</span> <br/>
                     <span>the fusion of design and functionality that defines my approach to web development</span>.
                 </p>
             </div>
             <EmblaCarousel/>
         </div>
        </>
    );
};

export default Work;