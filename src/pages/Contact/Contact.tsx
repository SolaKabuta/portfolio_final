import Footer from "../../components/UI/Footer/Footer.tsx";
import Form from "../../components/UI/Form/Form.tsx";
import './Contact.css'

const Contact = () => {



    return (
        <>
            <div
                className={'main'}>
                <div
                    className={'contact-grid'}>
                    <h4
                        id={'Contact'}>
                        Let's work
                        <span className={'together'}>&nbsp;together</span>.
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