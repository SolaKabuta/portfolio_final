import Portrait from '../../assets/images/portrait_opti.jpg'

const About = () => {
    return (
        <>
            <div
                className={'w-screen h-screen px-[10%]'}>
                <div
                    className={'uppercase flex justify-center gap-56'}>
                    <div
                        className={'w-[60vw]'}>
                        <h3
                            id={'About'}
                            className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05] hover:-rotate-2'}>
                            About <span className={'orange'}>me</span>.
                        </h3>
                        <p
                            className={'ease-in-out duration-1000 hover:scale-[1.05] hover:-rotate-2'}>
                            My name is Sola <br/>
                            <span className={'text-orange-600 animate-pulse'}>(pronounced « sho . la »)</span> <br/>
                            <span className={'orange'}>Before I delved into the world of coding, I stirred creativity in unconventional
                            realms</span>. <br/>
                            <span>As a former bartender specializing in crafting intricate cocktails, I found artistry in
                            mixology,
                            blending flavors akin to the way I now blend lines of code</span>. <br/>
                            <span>Beyond the bar, my free moments found solace in music production,
                            where rhythms and melodies became my palette</span>. <br/>
                            <span>Photography, a passion that bestowed upon me « the eye » for detail, captured fleeting
                            moments
                            in frames</span>. <br/>
                            <span>AND of course Gaming offered not just leisure but also a canvas for problem-solving.
                            Summer 2023 introduced me to coding, and unexpectedly, it became my addiction</span>. <br/>
                            <span>The logic and creativity merged seamlessly, captivating me wholly.
                            Now, my days are consumed by this newfound passion</span>, <br/>
                            <span>as I weave the intricate tapestry of
                            technology, design, and innovation through the world of coding.</span>
                        </p>
                    </div>
                    <div>
                        <img
                            className={'w-[40vw] h-full rounded-3xl ease-out duration-700 hover:scale-110'}
                            src={Portrait}
                            loading="lazy"
                            alt="Portrait of Sola Kabuta"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;