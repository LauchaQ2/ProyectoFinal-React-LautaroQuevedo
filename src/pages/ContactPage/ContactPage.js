import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_obghm38', 'template_u9c1xzq', form.current, 'user_YCFq6W7ZeLhBZ6dFS68j4')
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="mail" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};