import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import Swal from 'sweetalert2';

import "./ContactForm.css"


const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cmcjmr7', 'template_j6tbjse', form.current, 'JBwG8oRliJcQ2HY3c')
      .then((result) => {
         console.log(result.text);

        setFormData({});

        Swal.fire('Your email has been sent!', 'Thanks for contacting me!', 'success');
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire('Opsss something went wrong!', 'Try again!', 'error');
      });
  };

  return (
    <div className="container mt-5">
      <div className='row justify-content-center mb-4'>
        <div className='col-sm-5'>
        <h2>Contact </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label" htmlFor="user_name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name || ''}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="user_email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email || ''}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button className="btn btn-danger" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className='col-sm-5'>
        <h2>My Social Networks</h2>
            <ul className='icons mt-4'>
                <li><a href='https://www.linkedin.com/in/boris-caiza-7396a3217/' target="_blank"> <FontAwesomeIcon  className = "icon mt-3" icon={faLinkedin} /> &nbsp;  &nbsp;  &nbsp;  &nbsp; <span>Linkedin</span></a> </li>
                <li> <a href='https://github.com/BorisCaiza' target="_blank"><FontAwesomeIcon className = "icon mt-3" icon={faGithub} /> &nbsp;  &nbsp;   &nbsp;  &nbsp; <span>GitHub</span></a></li>
                <li> <FontAwesomeIcon className = "icon mt-3" icon={faPhone}/> &nbsp; &nbsp;  <span>+593991320401</span></li>
            </ul>
        </div>
        
      </div>

      <div className='row justify-content-center final mt-4'>
        <span>Boris Caiza 2023</span>
      </div>
    </div>
  );
};

export default ContactForm;