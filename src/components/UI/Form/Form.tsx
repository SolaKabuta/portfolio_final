import './Form.css'
const Form = () => {

    const handleCLick = () => {
        alert ('Nice ! But this form isn\'t working yet, feel free to reach out to me at solakabuta@gmail.com')
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
                            <input type="text" placeholder={'Email'}/>
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