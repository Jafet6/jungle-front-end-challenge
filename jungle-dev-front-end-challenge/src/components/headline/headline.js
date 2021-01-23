import React from 'react';
import playIcon from '../../images/homePage/playIcon.svg';
import greetingImage from '../../images/homePage/greetingImage.svg';
import './headline.css'

function HeadLine() {
  return (
    <div>
      <div className="head-line-content">
        <div className="head-line-left">
          <h1 className="h1-home-page">Easily create or join a local nanny share with Hapu</h1>
          <p className="p-home-page">Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
          <div>
            <div className="play-description-container">
              <div className="playIcon-container">
                <img className="playIcon" src={playIcon} alt="play icon" />
              </div>
              <span className="playIcon-description">See hapu in action (27 seconds)</span>
            </div>
          </div>
        </div>
        <div className="greeting-image">
          <img src={greetingImage} alt="geeting" />
        </div>
      </div>
    </div>
  );
};

export default HeadLine;