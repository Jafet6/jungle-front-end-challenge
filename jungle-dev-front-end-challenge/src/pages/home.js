import './homePage.css';
import React from 'react';
import Head from '../patterns/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import HeadLine from '../components/headline/headline';

function HomePage() {
  return (
    <div>
      <Head title='Hapu' />
      <div className='home-page-container'>
        <Header />
        <main>
          <div className='head-line-container'>
            <HeadLine />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
