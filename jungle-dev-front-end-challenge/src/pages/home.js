import './homePage.css';
import React from 'react';
import Head from '../patterns/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import HeadLine from '../components/headline/headline';
import NannyAvailable from '../components/nannyAvailable/nannyAvailable';
import ImageParagraphComponent from '../components/imageParagraphComponent/imageParagraphComponent';
import Divider from '../components/divider/divider';
import NewsLetter from '../components/newsletter/newsletter';
// import SharePayments from '../components/sharePayments/sharePayments';
import {
  ImageParagraphTitle,
  ImageParagraphImage,
  ImageParagraphLink,
  ImageParagraphParagraph } from '../components/imageParagraphComponent/innerComponents/innerComponents';

function HomePage() {
  return (
    <>
      <Head title='Hapu' />
      <div className='home-page-image' />
      <div className='home-page-container'>
        <Header />
        <main>
          <div className='head-line-container'>
            <HeadLine />
          </div>
          <div className='main-after-image'>
            <NannyAvailable />
            <ImageParagraphComponent 
              Link={ImageParagraphLink}
              Paragraph={ImageParagraphParagraph}
              Title={ImageParagraphTitle}
              Image={ImageParagraphImage}
            />
            <Divider />
            <NewsLetter />
            <Divider />
            <ImageParagraphComponent 
              Link={ImageParagraphLink}
              Paragraph={ImageParagraphParagraph}
              Title={ImageParagraphTitle}
              Image={ImageParagraphImage}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
