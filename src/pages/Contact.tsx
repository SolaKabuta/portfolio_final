
const Contact = () => {
    return (
        <>
            <div
                className={'w-screen h-screen py-[5%] px-[10%]'}>
                <div
                    className={'uppercase'}>
                    <h2
                        id={'Work'}
                        className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                        Let's work
                        <span
                            className={'text-orange-600'}>
                            &nbsp;together
                        </span>
                    </h2>
                    <p
                        className={'ease-in-out duration-1000 hover:scale-[1.05]'}>
                        I’m passionate about sharing knowledge and meeting new people. <br/>
                        I've had the opportunity to share ideas at various events around the globe.
                    </p>
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
        </>
    );
};

export default Contact;