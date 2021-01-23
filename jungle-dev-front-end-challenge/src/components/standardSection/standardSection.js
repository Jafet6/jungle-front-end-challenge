import React from 'react';
import './standardSection.css';
import {
  ImageParagraphTitle,
  ImageParagraphParagraph,
  ImageParagraphLink,
} from '../imageParagraphComponent/innerComponents/innerComponents';

function  StandardSection({ title, paragraph, link }) {
  return (
    <div className='standard-section-container'>
      <div className="standard-section-description">
        <ImageParagraphTitle 
          className={title.className}
          text={title.text}
        />
        <ImageParagraphParagraph 
          className={paragraph.className}
          text={paragraph.text}
        />
        <ImageParagraphLink
          className={link.className}
          text={link.text}
          href={title.href}
        />
      </div>
    </div>
  );
}

export default  StandardSection;