import Head from 'next/head';

import Header from '../Components/Header';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header>
      <Component {...pageProps} />
    </Header>
  </>
}

export default App;
