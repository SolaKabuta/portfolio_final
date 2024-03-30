import './Footer.css'
const Footer = () => {
    return (
        <>
            <div
                className={'w-screen py-1 px-[10%] footer-nav'}>
                    <div
                        className={'flex justify-between align-middle'}>
                        <a href="https://github.com/SolaKabuta">Github</a>
                        <a href="https://www.linkedin.com/in/sola-kabuta/">Linkedin</a>
                        <a href="https://dribbble.com/SolaKabuta">Dribbble</a>
                    </div>
            </div>
        </>
    );
};

export default Footer;