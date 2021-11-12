import React from 'react';
import './homePage.css';
import Head from '../patterns/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import HeadLine from '../components/headline/headline';
import NannyAvailable from '../components/nannyAvailable/nannyAvailable';
import ImageParagraphComponent from '../components/imageParagraphComponent/imageParagraphComponent';
import StandardSection from '../components/standardSection/standardSection';
import Divider from '../components/divider/divider';
import NewsLetter from '../components/newsletter/newsletter';
import nannyCostStructure from '../components/imageParagraphComponent/structures/nannyCostStructure';
import sharePaymentStructure from '../components/imageParagraphComponent/structures/sharePaymentsStructure';
import frameWorkStructure from '../components/standardSection/structures/frameWorkStructure';
import comingSoonStructure from '../components/standardSection/structures/comingSoonStructure';
import { Link } from 'react-router-dom'

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
              link={nannyCostStructure.link}
              paragraph={nannyCostStructure.paragraph}
              title={nannyCostStructure.title}
              image={nannyCostStructure.image}
            />
            <Divider />
            <NewsLetter />
            <Divider />
            <ImageParagraphComponent 
              link={sharePaymentStructure.link}
              paragraph={sharePaymentStructure.paragraph}
              title={sharePaymentStructure.title}
              image={sharePaymentStructure.image}
              reverse={true}
            />
            <Divider />
            <StandardSection 
              link={frameWorkStructure.link}
              paragraph={frameWorkStructure.paragraph}
              title={frameWorkStructure.title}
              image={frameWorkStructure.image}
            />
            <Divider />
            <StandardSection 
              link={false}
              paragraph={comingSoonStructure.paragraph}
              title={comingSoonStructure.title}
              image={comingSoonStructure.image}
              reverse={true}
            />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;
