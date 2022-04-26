import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {useEffect, useState} from "react";
import { assignColors } from "../helpers";
import Contact from "../components/Contact";
import Main from "../components/Main";
import About from "../components/About";
import Carousel from "../components/Carousel";

const Home = ({featuredProduct,products}) => {

  // const [fontNames,setFontNames] = useState(null);
  // const [fontNamesActive,setFontNamesActive] = useState(false);

  useEffect(() => {
    // setFontNamesActive(true);
    // setFontNames();
    assignColors();
  }, []);

  return (
    <>

      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="shortcut icon" href={`/${process.env.NEXT_PUBLIC_FAVICON}`} />
      </Head>
      
      <Hero />

      <Main featuredProduct={featuredProduct}/>

      <About/>
      
      <Carousel/>

      <Contact />
      
    </>
  );

};

export const getStaticProps = async () => {

  const endpoint = process.env.NEXT_PUBLIC_API_KEY;



  async function featuredProduct(){

    try {

      const res = await fetch(endpoint.toString().concat(`/${process.env.NEXT_PUBLIC_MAIN_FEATURED_PRODUCT ?? "2096389b-aa71-4f03-9cd0-242d6050e964" }`));
      const response = await res.json();
      const {error} = response;
      if(error){
        return {};
      }else{
        const {product:featured_product} = response;
        return featured_product;      
      }

    } catch (error) {
        return {};
    }

  }
  // const dev = process.env.NODE_ENV !== 'production';
  // const server = dev ? 'http://localhost:3000' : 'https://bitski-netlify-cms.netlify.app';
  // const req = await fetch(server + "/content/settings.json");
  // const res = await req.json();
  // console.log(res);
    
  if(process.env.NEXT_PUBLIC_MAIN_FEATURED_PRODUCT){

    const [featured_product] = await Promise.all([featuredProduct()]);
    return {
      props: {
        featuredProduct: featured_product
      },
    };

  }else{
    return {
      props: {
        featuredProduct: {}
      },
    };
  }
  



};


export default Home;
