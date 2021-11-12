import React from 'react';
import Head from '../patterns/head';
import Header from '../patterns/header';

function Teste() {
  return (
    <>
      <Head title='Hapu' />
      <div className='home-page-image' />
      <div className='home-page-container'>
        <Header />
        <main>
          Teste
        </main>
      </div>
    </>
  )
}

export default Teste
