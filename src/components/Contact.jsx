import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

export default function Contact() {
const emailRef = useRef();
const nameRef = useRef();
const messageRef = useRef();
const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID,{
      user_name: nameRef.current.value,
      user_email: emailRef.current.value,
      message: messageRef.current.value,
    })
      .then((result) => {
        setEmailSent(true);
        console.log('Email sent successfully:', result);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  
  return (
    <section id="Contact" className="contact__section">
      <div>
        <h2 className="heading">Contact Me</h2>
        <p className="sub__title">Let's Create Something together !</p>
      </div>
      {emailSent ? (
        <div className="sub__title success">Email sent successfully! Thank you for reaching out.</div>
        ) : (
      <form className="contact__form__container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="name" className="contact__label">
            <input
              type="text"
              className="contact__input text-md"
              name="user_name"
              id="name"
              placeholder="Full Name"
              ref={nameRef}
              required
            />
          </label>
          <label htmlFor="email" className="contact__label">
            <input
              type="email"
              className="contact__input text-md"
              name="user_email"
              id="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact__label">
          <input
            type="text"
            style={{padding: "16px 8px 145px 15px"}}
            className="contact__input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
            ref={messageRef}
          />
        </label>
        <div>
          <button className="btn btn-primary contact__form__btn">Submit</button>
        </div>
      </form>
      )}
    </section>
  );
}