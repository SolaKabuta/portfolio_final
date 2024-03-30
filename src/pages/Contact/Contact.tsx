import Footer from "../../components/UI/Footer/Footer.tsx";
import Form from "../../components/UI/Form/Form.tsx";
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div
                className={'w-screen h-screen py-[5%] px-[10%]'}>
                <div
                    className={'uppercase grid place-content-center'}>
                    <h4
                        id={'Contact'}
                        className={'text-9xl text-center pb-20 ease-in-out duration-1000 hover:scale-[1.05]'}>
                        Let's work
                        <span className={'text-orange-600'}>&nbsp;together</span>.
                    </h4>
                    <p
                        className={'contact-text'}>
                        <span>If you are curious about my process or are interested in the details, <br/></span>
                        <span>Feel free to reach out to me.</span>
                    </p>
                    {/*FORM*/}
                    <Form/>
                </div>
            </div>
                <Footer/>
        </>
    );
};

export default Contact;