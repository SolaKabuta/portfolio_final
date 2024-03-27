import Footer from "../components/Footer.tsx";

const Contact = () => {
    return (
        <>
            <div
                className={'w-screen h-screen py-[5%] px-[10%]'}>
                <div
                    className={'uppercase grid place-content-center'}>
                    <h4
                        id={'Contact'}
                        className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                        Let's work
                        <span className={'text-orange-600'}>&nbsp;together</span>.
                    </h4>
                    <p
                        className={'grid place-content-center text-center ease-in-out duration-1000 hover:scale-[1.05]'}>
                        <span>If you are curious about my process or are interested in the details, <br/></span>
                        <span>Feel free to reach out to me.</span>
                    </p>
                    {/*FORM*/}
                    <div
                        className={'grid place-content-center pt-20'}>
                        <div
                            className={''}>
                            <form action="">
                                <div>
                                    <input type="text" placeholder={'First name'}/>
                                    <input className={'ml-10'} type="text" placeholder={'Second name'}/>
                                </div>
                                <br/>
                                <div>
                                    <input className={'w-[470px]'} type="text" placeholder={'Email'}/>
                                </div>
                                <br/>
                                <div>
                                    <input className={'w-[470px] h-52 input-txt'} type="text" placeholder={'Write something'}/>
                                </div>
                            </form>

                        </div>
                    </div>
                    {/*<a*/}
                    {/*    href="mailto:solakabuta@gmail.com">*/}
                    {/*    solakabuta@gmail.com*/}
                    {/*</a>*/}
                    {/*<a*/}
                    {/*    href='tel:+32 474 73 08 10'>*/}
                    {/*    +32 474 73 08 10*/}
                    {/*</a>*/}
                    {/*<p>*/}
                    {/*    Bruxelles / Belgium*/}
                    {/*</p>*/}
                </div>
            </div>
                <Footer/>
        </>
    );
};

export default Contact;