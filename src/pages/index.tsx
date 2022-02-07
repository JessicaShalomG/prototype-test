import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    document.getElementById('__next')!.classList.add('nextPage');

    return () => {
      document.getElementById('__next')!.classList.remove('nextPage');
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mercado Libre test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
