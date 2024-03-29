
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
                        className={'grid place-content-center text-center ease-out duration-1000 hover:scale-[1.05]'}>
                        <span>If you are curious about my process or are interested in the details, <br/></span>
                        <span>Feel free to reach out to me.</span>
                    </p>
                    {/*FORM*/}
                    <div
                        className={'flex justify-center pt-20'}>
                            <form action="">
                                <div
                                    className={'names'}>
                                    <input type="text" placeholder={'First name'}/>
                                    <input type="text" placeholder={'Second name'}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="text" placeholder={'janedoe@gmail.com'}/>
                                </div>
                                <br/>
                                <div>
                                    <input className={' h-52'} type="text" placeholder={'Write something'}/>
                                </div>
                                <div
                                    className={'flex justify-center'}>
                                    <button
                                        className={'send-btn'}
                                        type={'submit'}>Send
                                    </button>
                                </div>
                            </form>
                    </div>
                    {/*<a*/}
                    {/*    href="mailto:solakabuta@gmail.com">*/}
                    {/*    solakabuta@gmail.com*/}
                    {/*</a>*/}
                    {/*<a*/}
                    {/*    href='tel:+32 474 73 08 10'>*/}
                    {/*    +32 474 73 08 10*/}
                    {/*</a>*/}
                </div>
            </div>
        </>
    );
};

export default Contact;