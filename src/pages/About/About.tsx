import Portrait from '../../assets/images/portrait_opti.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <div
                className={'main'}>
                <div
                    className={'flexbox'}>
                    <div
                        className={'div-left'}>
                        <h3
                            id={'About'}>
                            About <span className={'me'}>me</span>.
                        </h3>
                        <p>
                            My name is Sola <br/>
                            <span className={'pronounced'}>(pronounced « sho . la »)</span> <br/>
                            <span>Before I delved into the world of coding, I stirred creativity in unconventional
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
                            className={'portrait'}
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