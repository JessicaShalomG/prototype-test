import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/Home.module.css';
import SearchView from 'views/SearchView';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercado Libre test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchView />
      </main>
    </div>
  );
};

export default Home;
