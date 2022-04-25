import '../styles/globals.scss'
import 'swiper/css';
import Fonts from '../components/Fonts';

import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Fonts/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp