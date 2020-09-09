import React from "react";
import {useForm} from 'react-hook-form';
import "./feedback-form.scss";

function FeedbackForm() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        event.target.reset();

        try {
            await fetch('feedback-form.php', {
                method: 'POST',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((res) => {
                    res.status >= 400
                        ? alert('Message not sent. Please, notify the site administrator: shulo.vova@gmail.com')
                        : alert('The message was delivered. Thank you.')
                })
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Name:
                <input name="name"
                       ref={register({
                           required: true,
                           maxLength: 20,
                           minLength: 2
                       })}/>
            </label>
            {errors.name && errors.name.type === 'required' && <span>&#9888; Name is required</span>}
            {errors.name && errors.name.type === 'minLength' && <span>&#9888; Min length: 2</span>}
            {errors.name && errors.name.type === 'maxLength' && <span>&#9888; Max length: 20</span>}


            <label>Email:
                <input name="email"
                       ref={register({
                           required: true,
                           maxLength: 40,
                           pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                           }
                       })}/>
            </label>
            {errors.email && errors.email.type === 'required' && <span>&#9888; Email is required</span>}
            {errors.email && errors.email.type === 'pattern' && <span>&#9888; Invalid email</span>}
            {errors.email && errors.email.type === 'maxLength' && <span>&#9888; Max length: 40</span>}


            <label>Message:
                <textarea name="message"
                          ref={register({
                              required: true,
                              minLength: 3
                          })}/>
            </label>
            {errors.message && errors.message.type === 'required' && <span>&#9888; Message is required</span>}
            {errors.message && errors.message.type === 'minLength' && <span>&#9888; Min length: 3</span>}


            <button type="submit">Send message</button>
        </form>
    );
}

export default FeedbackForm;
