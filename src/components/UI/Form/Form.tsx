import './Form.css'
const Form = () => {

    const handleCLick = () => {
        alert ('message sent')
    }

    return (
        <>
            <div>
                <div
                    className={'flex justify-center px-20'}>
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
                            <input className={'h-52'} type="text" placeholder={'Write something'}/>
                        </div>
                        <div
                            className={'flex justify-center'}>
                            <button
                                onClick={handleCLick}
                                className={'send-btn '}
                                type={'submit'}>Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;