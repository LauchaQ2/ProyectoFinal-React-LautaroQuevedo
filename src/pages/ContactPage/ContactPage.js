import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css'

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
    <>
    <div className='container-fluid d-flex mt-2 mb-2 justify-content-around'>
      <img className='logo-contact img-fluid' src="https://i.ibb.co/chfL26G/whatsapp-1.png" />
      <img className='logo-contact img-fluid' src='https://i.ibb.co/jh7FQCC/facebook-1.png'/>
      <img className='logo-contact img-fluid' src='https://i.ibb.co/F037ZqW/instagram.png'/>
      <img className='logo-contact img-fluid' src='https://i.ibb.co/yhKj7T9/gorjeo.png'/>
    </div>
    
    <form className='' ref={form} onSubmit={sendEmail}>
    <div className='container h-px w-50 d-flex justify-content-center flex-wrap'>
        <div className='d-block w-100'>
          <label className='w-100'>Nombre</label>
          <input className='w-100 form-bg' type="text" name="nombre" />
        </div>
        <div className='container w-100 ps-0 pr-0 d-flex justify-content-around'>
        <div className='d-block ms-0 ps-0 w-50'>
          <label className='w-100'>Email</label>
          <input className='w-100 form-bg' type="email" name="mail" />
        </div>
        <div className='d-block w-50'>
          <label className='w-100'>Telefono</label>
          <input className='w-100 form-bg' type="number" name="telefono" />
        </div>
        </div>
        <div className='d-block w-100'>
          <label  className='w-100'>Message</label>
          <textarea className='w-100 form-bg message-area' name="message" />
        </div>
        <input className="w-100 mb-3" type="submit" value="Send" />
      </div>
      </form>
      </>
  );
};