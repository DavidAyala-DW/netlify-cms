import {useState} from "react";
import '../styles/globals.scss'
import 'swiper/css';
import Fonts from '../components/Fonts';

import Layout from '../components/Layout'

import {AppProvider } from "../helpers/Context";

function MyApp({ Component, pageProps }) {


  return (

    <AppProvider>
        <Layout>
        <Fonts/>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>

  )
}


export default MyApp;