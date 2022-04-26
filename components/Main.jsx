import {useEffect,useState} from 'react'
import CustomProductViewer from './CustomProductViewer';
import  FakeFeaturedProduct from "./FakeFeaturedProduct"

const topText = process.env.NEXT_PUBLIC_MAIN_TOP_TEXT ?? "";
const headline = process.env.NEXT_PUBLIC_MAIN_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MAIN_DESCRIPTION ?? "";

function Main({featuredProduct,content}) {

  const [product, setProduct] = useState(featuredProduct)

  useEffect(() => {

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

    if(Object.keys(featuredProduct).length > 0){
      
      const interval = setInterval(() => {

        const product = featuredProduct(content.main_featured_product);
        setProduct(product);
  
      },120*1000)
  
      return () => clearInterval(interval);

    }

  },[content])


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
            <FakeFeaturedProduct content={content} />
          )

        }
        
      </div>

    </section>
  )
}

export default Main