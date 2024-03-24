import logo from '../assets/icons/logo/logo_white.svg'
const Navbar = () => {
    return (
        <>
            <nav
                className={'w-screen pt-10 px-[10%] uppercase flex justify-between'}>
                <div>
                    <img
                        className={'w-12 ease-in-out duration-700 hover:scale-150'}
                        src={logo}
                        alt="logo Sola Kabuta"/>
                </div>
                <div
                    className={'navbar'}>
                    <ul
                        className={'flex align-middle justify-end gap-5 font-bold'}>
                        <li>
                            <a
                                id={'Home'}
                                href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Work">
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