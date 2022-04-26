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

export const getServerSideProps = async () => {

  const endpoint = process.env.NEXT_PUBLIC_API_KEY;

  async function featuredProduct(){

    try {
      const res = await fetch(endpoint.toString().concat(`/${process.env.NEXT_PUBLIC_MAIN_FEATURED_PRODUCT ?? "2096389b-aa71-4f03-9cd0-242d6050e964" }`));
      console.log(res);
      const response = await res.json();
      console.log(response);
      const {product:featured_product} = response;
      console.log(featured_product);
      return featured_product;      

    } catch (error) {
        return {};
    }



  }
    
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
