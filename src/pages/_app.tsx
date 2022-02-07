import 'styles/globals.css';

import type { AppProps } from 'next/app';

import Layout from 'components/layout';
import { setupInterceptorsTo } from 'axios/requests';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  setupInterceptorsTo(axios);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
