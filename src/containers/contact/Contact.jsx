import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { RiContactsFill } from 'react-icons/ri';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Contact me" icon={<RiContactsFill size={40} />} />
      <div className="contact__content">
        <h3 className="contact__content__header">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controls">
            <div className="nameWrapper">
              <input name="name" className="inputName" type="text" />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input name="email" className="inputEmail" type="text" />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div className="desWrapper">
              <textarea
                name="description"
                className="inputDescription"
                type="text"
                rows={'5'}
                style={{ resize: 'nonw' }}
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
