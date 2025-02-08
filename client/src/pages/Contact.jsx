import React, { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Contact us</h1>
      </div>
      {/* Contact page main */}
      <div className="container grid grid-two-cols">
        <div className="contact-image">
          <img
            src="/images/support.png"
            alt="we are always ready to help you"
            height={400}
            width={400}
          />
        </div>
        {/* contact form  */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                required
                value={Contact.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                value={Contact.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                autoComplete="off"
                required
                value={Contact.message}
                onChange={handleInput}
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
      <section className="mb-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7213.568819032914!2d82.9836475912172!3d25.31144646055004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dfbc4d72de9%3A0xb7bc10aa82f824f8!2sSigra%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1739040947260!5m2!1sen!2sin" width="100%" height="450"allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </section>
    </>
  );
};

export default Contact;
