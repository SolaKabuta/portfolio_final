import EmblaCarousel from "../../components/Features/EmblaCarousel/EmblaCarousel.tsx";
import './Work.css'

const Work = () => {

    return (
        <>
         <div
            className={'main'}>
             <div>
                 <h2
                     id={'Work'}>
                     <span className={'Work'}>Work</span> <br/>
                     <p>
                         &<span className={'play'}>&nbsp;Playground</span>.
                     </p>
                 </h2>
                 <p
                    className={'work-text'}>
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