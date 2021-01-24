import React, { useState } from 'react';
import axios from 'axios';
import './newsletter.css';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [newsLetterMessage, setNewsLetterMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    return axios
      .post('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
        name,
        email,
      })
      .then((res) => {
        if (!res) return setNewsLetterMessage('Something went wrong =(')
        console.log(res)
        return setNewsLetterMessage('Your request was received =)')
      })
      .catch((err) => {
        console.log(err)
        return setNewsLetterMessage('Something went wrong =(')
      })
  }

  return (
    <section className='newsletter-container'>
      <div className='newsletter-content'>
        <div className='newsletter-text-content'>
          <h3 className='newsletter-title'>Are you a parent without a nanny and looking to share?</h3>
          <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
        </div>
        <div className='newsletter-input-container'>
          <input onChange={(e) => setName(e.target.value)} className="newsletter-input" type="text" placeholder="Your name" />
          <input onChange={(e) => setEmail(e.target.value)} className="newsletter-input" type="text" placeholder="Your email" />
          <button onClick={(e) => handleClick(e)} className="newsletter-send-button" type="button">Send</button>
        </div>
        {newsLetterMessage ? <p className="newsletter-p">{newsLetterMessage}</p> : null}
      </div>
    </section>
  );
}

export default NewsLetter;