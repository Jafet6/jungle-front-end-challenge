import React from 'react';
import './imageParagraphComponent.css';
import { Link } from 'react-router-dom';
import imageSection1  from '../../images/homePage/imageSection1.svg';

function ImageParagraphComponent({ Link, Paragraph, Title, Image }) {
  return (
    <section className="image-paragraph-section">
      <div className="image-paragraph-content">
        <div className="image-paragraph-description">
          <Title 
            className='share-nanny-cost-h2'
            text='Share your home, nanny and costs'
          />
          <Paragraph 
            className='share-nanny-cost-p'
            text='You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.'
          />
          <Link
            className='share-nany-cost-link'
            text='Ready to get started?'
            href='7'
          />
        </div>
        <Image 
          className='nanny-cost-section-image'
          src={imageSection1}
          alt='computer showing app'
        />
      </div>
    </section>
  );
}

export default ImageParagraphComponent;