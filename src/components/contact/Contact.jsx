import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <h5>tseli@gmail.com</h5>
            <a href="mailto:tseli@gamil.com">Send a message</a>
          </article>
          <article className="contact__option">
            <h4>Message</h4>
            <h5>tseli</h5>
            <a href="https://m.me/tseli">Send a message</a>
          </article>
          <article className="contact__option">
            <h4>WhatsApp</h4>
            <h5>+251912345</h5>
            <a href="https://api.whatsapp.com/send?phone+251912345">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact