import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';

// components
import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';


const ContactUs = props => {
    return Style.it(`
    .contact__us--container {
        padding-right: 100px;
        padding-top: 80px;
        padding-left: 100px;
        padding-bottom: 100px;
        // display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        back
    }
    .contact__us--grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        padding-top: 60px;

    }
    .contact__us--image {
        width: 90%;
    }
    .contact__us--form {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
    .contact__us--right {
        margin: 90px;
        margin-top: 30px;
        margin-left: 0px;
    }
    .contact__us--textarea {
        margin:  10px 0 30px 0;
        border-radius: 2px;
        border: 1px solid rgba(49, 222, 40, 0.664);
        letter-spacing: .8px;
        font-size: 15px;
        padding: 8px;
        padding-left: 2px;
    }
    .contact__us--heading {
        font-size: 33px;
        text-align: center;
    }
    `,
        <div className='contact__us--container'>
            <h1 className='contact__us--heading'>Get in touch with Us</h1>
            <div className='contact__us--grid-container'>
                <div className='contact__us--left'>
                    <img 
                            src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586108592/iTazkir/undraw_newsletter_vovu_twievt.png" 
                            alt=""
                            className='contact__us--image'
                    />
                </div>
                <div className='contact__us--right'>
                    <form className='contact__us--form'>
                        <Input 
                            name='name'
                            inputType='text'
                            placeholder='Enter your Name'
                        />
                        <Input 
                            name='email'
                            inputType='email'
                            placeholder='Enter your Email Address'
                        />
                        <textarea placeholder='Type your message here pls' className='contact__us--textarea' name="comment" id="" cols="15" rows="3"></textarea>

                        <SubmitButton text='Send Message'/>
                    </form>
                </div>   
            </div>       
        </div>
    )
}

ContactUs.propTypes = {

}

export default ContactUs;
