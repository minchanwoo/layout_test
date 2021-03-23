import Head from 'next/head';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header>
      <Component {...pageProps} />
    </Header>
    <Footer />
  </>
}

export default App;
