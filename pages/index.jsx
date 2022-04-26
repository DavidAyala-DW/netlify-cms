import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {useEffect, useState, useContext} from "react";
import { assignColors } from "../helpers";
import Contact from "../components/Contact";
import Main from "../components/Main";
import About from "../components/About";
import Carousel from "../components/Carousel";
import {AppContext} from "../helpers/Context";



const Home = ({featuredProduct,content}) => {

  // const [fontNames,setFontNames] = useState(null);
  // const [fontNamesActive,setFontNamesActive] = useState(false);

  const [contentPage, setContentPage] = useContext(AppContext);
  

  useEffect(() => {    
    setContentPage(content);
    assignColors();
  }, [content,setContentPage]);

  return (
    <>

      <Head>
        <title>{content.site_title}</title>
        <link rel="shortcut icon" href={`/${content.site_icon}`} />
      </Head>
      
      <Hero content={content.hero} />

      <Main content={content.main} featuredProduct={featuredProduct}/>

      <About content={content.about}/>
      
      <Carousel content={content.gallery}/>

      <Contact content={content.contact} />
      
    </>
  );

};

export const getServerSideProps  = async () => {

  const endpoint = process.env.NEXT_PUBLIC_API_KEY;

  async function featuredProduct(id){

    try {

      const res = await fetch(endpoint.toString().concat(`/${id}`));
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

  const dev = process.env.NODE_ENV !== 'production';

  const server = dev ? 'http://localhost:3000' : 'https://bitski-netlify-cms.netlify.app';
  const req = await fetch(server + "/settings.json");
  const res = await req.json();
  const {main} = res;
  const {main_featured_product} = main;


    
  if(main_featured_product){

    const [featured_product] = await Promise.all([featuredProduct(main_featured_product)]);
    return {
      props: {
        featuredProduct: featured_product,
        content: res
      },
    };

  }else{
    return {
      props: {
        featuredProduct: {},
        content: {}
      },
    };
  }
  



};


export default Home;
