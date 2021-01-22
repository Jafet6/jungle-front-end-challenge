import './homePage.css';
import React from 'react';
import Head from '../patterns/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';

function HomePage() {
  return (
    <div>
      <Head title='Hapu' />
      <div className='home-page-container'>
        <Header />
        <main>

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
