import { useRef } from 'react';
import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { RiContactsFill } from 'react-icons/ri';
import './Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    //event.preventDefault();

    emailjs.sendForm(
      'service_mtx0z1i',
      'template_z01daxc',
      form.current,
      'BPLNO9HA_WYM1naMK'
    );
    {
      /* .then(
        (result) => {
          alert(result.text + ' Submitted Successful');
        },
        (error) => {
          alert(error.text + ' Not Submitted');
        }
      );*/
    }
    event.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Contact me" icon={<RiContactsFill size={40} />} />
      <div className="contact__content">
        <h3 className="contact__content__header">Let's Talk</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact__content__form">
            <div className="contact__content__form__controls">
              <div className="nameWrapper">
                <input name="user_name" className="inputName" type="text" />
                <label className="nameLabel">Name</label>
              </div>
              <div className="emailWrapper">
                <input name="user_email" className="inputEmail" type="email" />
                <label className="emailLabel">Email</label>
              </div>
              <div className="desWrapper">
                <textarea
                  name="message"
                  className="inputDescription"
                  type="text"
                  rows={'5'}
                  style={{ resize: 'nonw' }}
                />
                <label className="descriptionLabel">Description</label>
              </div>
            </div>
            <button type="submit" value="Send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
