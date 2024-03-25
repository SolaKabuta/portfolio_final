
const Contact = () => {
    return (
        <>
            <div
                className={'w-screen h-screen py-[5%] px-[10%]'}>
                <div
                    className={'uppercase grid place-content-baseline'}>
                    <h4
                        id={'Contact'}
                        className={'text-9xl pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                        Let's work
                        <span
                            className={'text-orange-600'}>
                            &nbsp;together
                        </span>.
                    </h4>
                    <p
                        className={'ease-in-out duration-1000 hover:scale-[1.05]'}>
                        If you are curious about my process or are interested in the details, <br/>
                        Feel free to reach out to me.
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