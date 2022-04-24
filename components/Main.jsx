import {useEffect,useState} from 'react'
import CustomProductViewer from './CustomProductViewer';
import  FakeFeaturedProduct from "./FakeFeaturedProduct"

const topText = process.env.NEXT_PUBLIC_MAIN_TOP_TEXT ?? "";
const headline = process.env.NEXT_PUBLIC_MAIN_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MAIN_DESCRIPTION ?? "";

function Main({featuredProduct}) {

  const [product, setProduct] = useState(featuredProduct)

  useEffect(() => {

    async function featuredProduct(){

      try {
        const endpoint = process.env.NEXT_PUBLIC_API_KEY;
        const res = await fetch(endpoint.toString().concat(`/${process.env.NEXT_PUBLIC_MAIN_FEATURED_PRODUCT ?? "2096389b-aa71-4f03-9cd0-242d6050e964" }`));
        const response = await res.json();
        const {product:featured_product} = response;
        return featured_product; 

      } catch (error) {
        return {};
      }

    }

    if(Object.keys(featuredProduct).length > 0){
      
      const interval = setInterval(() => {

        const product = featuredProduct();
        setProduct(product);
  
      },120*1000)
  
      return () => clearInterval(interval);

    }

  },[])


  return (

    <section className='w-full max-w-[1440px] px-4 md:px-20 mx-auto h-full flex flex-col justify-center items-center md:pt-20 lg:pt-[120px]'>

      <div className='max-w-[608px] mx-auto w-full'>

        {

          Object.keys(featuredProduct).length > 0 && (
            <CustomProductViewer product={product} />
          )

        }

        {
          
          Object.keys(featuredProduct).length == 0 && (
            <FakeFeaturedProduct />
          )

        }
        
      </div>

    </section>
  )
}

export default Main