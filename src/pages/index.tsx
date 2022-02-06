import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/Home.module.css';
import HomeView from 'views/HomeView';
import SearchedResults from 'views/SearchedResults';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercado Libre test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomeView />
        <SearchedResults />
      </main>
    </div>
  );
};

export default Home;
