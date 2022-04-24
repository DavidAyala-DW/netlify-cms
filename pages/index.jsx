import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {useEffect} from "react";
import { assignColors } from "../helpers";
import Contact from "../components/Contact";
import Main from "../components/Main";
import About from "../components/About";
import Carousel from "../components/Carousel";


const Home = ({featuredProduct,products}) => {

  useEffect(() => {
    assignColors();
  }, [products]);

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
// export const getStaticProps = async (ctx) => {


//   return {
//     props:{
//       data:null
//     }
//   }
// }

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

  async function x(){

    const res = await fetch(endpoint+"?all=true&limit=100&offset=0");
    const data = await res.json()
    const {products} = data;
    console.log(products.map(p => p.id));
    return products;
    
  }

  async function requestProduct(id){

    try {

      if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function(str, newStr){
      
          // If a regex pattern
          if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
            return this.replace(str, newStr);
          }
      
          // If a string
          return this.replace(new RegExp(str, 'g'), newStr);
      
        };
      }

      // example ID = 5f267ee7-aaa1-4f7d-b9cf-776cdafe71db -> 844412 (each number is string.length of the split)

      const productId = id.toString().trim().replaceAll("'","").replaceAll('"',"");

      const keys = productId.split("-");
      let validCombination = "";

      keys.forEach(key => validCombination += `${key.length}` )

      if(validCombination === "844412"){
        const request = await fetch(endpoint.concat(`/${productId}`));
        const response = await request.json();
        return response.product;      
      }

      return {id};

    } catch (error) {
      return {id};
    }
    
  }

  async function specificProducts(){

    let arrayProducts =  process.env.NEXT_PUBLIC_ARRAY_IDS.split(",");
    // const requestProducts = await fetch("https://token-system-one.vercel.app/api/tokens");
    // const responseProducts = await requestProducts.json();
    // const arrayProducts = responseProducts.map(item => item.token).reverse();
    const allResponses = await Promise.all(arrayProducts.map(id => requestProduct(id)));
    return allResponses;
    
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
