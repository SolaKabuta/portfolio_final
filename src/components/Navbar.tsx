import logo from '../assets/icons/logo/logo_white.svg'
const Navbar = () => {
    return (
        <>
            <nav
                className={'w-screen pt-10 px-[10%] uppercase flex justify-between'}>
                <div>
                    <img
                        className={''}
                        src={logo}
                        alt="logo Sola Kabuta"/>
                </div>
                <div>
                    <ul
                        className={'flex align-middle justify-end gap-5'}>
                        <li>
                            <a
                                id={'Home'}
                                href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                id={'Work'}
                                href="#work">
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                id={'About'}
                                href="">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                id={'Contact'}
                                href="">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;