import React from 'react';
import { Link } from 'react-router-dom';
import './shareNannyCost.css';
import './sharePayment.css'


function ImageParagraphTitle({ className, text }) {
  return (
    <h2 className={className}>{text}</h2>
  );
}

function ImageParagraphParagraph({ className, text }) {
  return (
    <p className={className}>
      {text}
    </p>
  );
}

function ImageParagraphImage({ classNameDiv, className, src, alt }) {
  return (
    <div className={classNameDiv}>
      <img className={className} src={src} alt={alt} />
    </div>
  );
}

function ImageParagraphLink({ className, text, href }) {
  return (
    <div>
      <Link className={className} to={href}>{text}</Link>
    </div>
  );
}



export { ImageParagraphParagraph, ImageParagraphTitle, ImageParagraphImage, ImageParagraphLink };
