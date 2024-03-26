// import Home_btn from "../components/home_btn.tsx";


const Work = () => {



    return (
        <>
         <div
            className={'w-screen h-screen py-[5%] px-[10%]'}>
             <div
                className={'uppercase grid place-content-baseline'}>
                 <h2
                     id={'Work'}
                     className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                     <span
                        className={'text-orange-600'}>
                         Work
                     </span> <br/>
                     <span
                        className={'text-8xl'}>
                         &
                         <span
                            className={''}>
                         &nbsp;Playground
                     </span>.
                     </span>
                 </h2>
                 <p
                    className={'ease-in-out duration-1000 hover:scale-[1.05]'}>
                     From elegant websites for small businesses to dynamic web applications for startups, (or for a training purpose).<br/>
                     each project embodies my passion for creativity, innovation, and excellence in web development. <br/>
                     Whether you're evaluating my skills, or simply curious to see my work, <br/>
                     this page serves as a window into my journey as both a web developer and a designer. <br/>
                     Take a moment to browse through these projects and witness firsthand <br/>
                     the fusion of design and functionality that defines my approach to web development.
                 </p>
             </div>
         </div>

        </>
    );
};

export default Work;