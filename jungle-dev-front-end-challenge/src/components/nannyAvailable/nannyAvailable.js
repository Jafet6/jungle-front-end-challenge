import React from 'react';
import './nannyAvailable.css';
import profileImage from '../../images/homePage/profileImage.svg'
import { Link } from 'react-router-dom';

function NannyAvailable() {
  return (
    <section className="nanny-available-container">
      <div className="nanny-available-content">
        <img className="nanny-image" src={profileImage} alt='nanny' />
      </div>
      <div className="nanny-available-right">
        <Link className="nanny-available-link" to="/6">Sarah’s day care available now in North Sydney</Link>
        <span className="nanny-availability">Wednesday, Thursday, Friday - 7:30 - 5:30</span>
      </div>
    </section>
  );
}

export default NannyAvailable;