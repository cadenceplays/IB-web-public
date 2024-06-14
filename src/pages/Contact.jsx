import React, { useState } from 'react';
import "./Contact.css";
import featuredImg from '../assets/contact.jpg';
import Swal from 'sweetalert2';
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";


const Contact = () => {
  const EMAIL_TO = "support@internationalbuddy.org";
  const EMAIL_SUBJECT_PREFIX = "Msg from IB website, written by: ";

  const initFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initFormValues);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formValues: ", formValues);

    let databaseValues = {
      to: "",
      message: {
        subject: "",
        html: "",
      },
    };

    databaseValues.to = EMAIL_TO;
    databaseValues.message.subject = EMAIL_SUBJECT_PREFIX + formValues.name;
    databaseValues.message.html = 
      "<b>Name:</b> " + formValues.name + "<br/>" +
      "<b>Email:</b> " + formValues.email + "<br/>" +
      "<b>Message:</b> <br/>" + formValues.message.replace(/(\r\n|\r|\n)/g, '<br/>');

    try {
        await addDoc(collection(db, "mail"), databaseValues);

        Swal.fire({
            title: 'Success',
            text: 'Your message has been sent!',
            icon: 'success',
            iconColor: '#A5C727',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5C727'
        });

        setFormValues(initFormValues);

      } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error',
            text: `${error}`,
            icon: 'error',
            iconColor: '#A5C727',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5C727'
        });
    }

  };


  return (
    <div className="contact">
      <div className="contact_container">
        <img src={featuredImg} alt="Featured"/>
      </div>
      <div className="contact_container">
        <div className="contact_title">
              Contact
        </div>
        <div className="contact_container">
          <p><b>Our email is:</b></p>
          <div className="email"><a href="mailto: support@internationalbuddy.org">support@internationalbuddy.org</a></div>
          <p>Please email us or leave a message below if you have any suggestions, requests, or questions. We will respond as quickly as possible. Volunteers can also use this email to verify the service hours. </p>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          <div className="contact-form">
              <label htmlFor="name">Name*</label>
              <input type="text" name="name" id="name" maxLength='50' value={formValues.name} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
              <span>Your name (5-50 characters without special character)</span>
          </div>
          <div className="contact-form">
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" value={formValues.email} required onChange={onChange} />
              <span>Your email which we can reply to</span>
          </div>
          <div className="contact-form">
              <label htmlFor="message">Message*</label>
              <textarea name="message" id="message" maxLength="2000" rows="8" value={formValues.message} required onChange={onChange} />
              <span>Message you would like to send to us</span>
          </div>

          <button>Send</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact