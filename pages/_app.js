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


export const getStaticProps = async (ctx) => {

  const req = await fetch("../content/settings.json");
  const res = await req.json();
  console.log(res);

  return {
    props:{
      data:null
    }
  }
}

export default MyApp;