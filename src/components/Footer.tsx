
const Footer = () => {
    return (
        <>
            <div
                className={'w-screen h-screen py-[10%] px-[10%]'}>
                <div
                    className={'grid place-content-center'}>
                    <form action="">
                        <div>
                            <input type="text" placeholder={'Prénom'}/>
                            <input className={'ml-10'} type="text" placeholder={'Nom'}/>
                        </div>
                        <br/>
                        <div>
                            <input className={'w-[470px]'} type="text" placeholder={'Email'}/>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Footer;