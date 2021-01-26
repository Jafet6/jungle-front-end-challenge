import React from 'react';
import './standardSection.css';
import {
  ImageParagraphTitle,
  ImageParagraphParagraph,
  ImageParagraphLink,
  ImageParagraphImage,
} from '../imageParagraphComponent/innerComponents/innerComponents';

function  StandardSection({ title, paragraph, link, image, reverse = false }) {
  return (
    <div className='standard-section-container'>
      {reverse ? 
        <ImageParagraphImage 
          className={image.className}
          src={image.src}
          alt={image.alt}
          classNameDiv={image.classNameDiv}
        />
        :
        null
      }
      <div className="standard-section-description">
        <ImageParagraphTitle 
          className={title.className}
          text={title.text}
        />
        <ImageParagraphParagraph 
          className={paragraph.className}
          text={paragraph.text}
        />
        {link ? 
          <ImageParagraphLink
            className={link.className}
            text={link.text}
            href={link.href}
          />
          :
          null
        }
      </div>
      {reverse ? 
        null
        : 
        <ImageParagraphImage 
          className={image.className}
          src={image.src}
          alt={image.alt}
          classNameDiv={image.classNameDiv}
        />
      }
    </div>
  );
}

export default  StandardSection;