import React from 'react'
import Image from "next/image";

function FakeFeaturedProduct() {

  const image =  "/".concat(process.env.NEXT_PUBLIC_MAIN_FAKE_FEATURED_PRODUCT_IMAGE) ?? "";
  const saleType = process.env.NEXT_PUBLIC_MAIN_FAKE_FEATURED_PRODUCT_SALETYPE ?? "";
  const status = process.env.NEXT_PUBLIC_MAIN_FAKE_FEATURED_PRODUCT_STATUS ?? "";
  const title = process.env.NEXT_PUBLIC_MAIN_FAKE_FEATURED_PRODUCT_TITLE ?? "";
  const price = process.env.NEXT_PUBLIC_MAIN_FAKE_FEATURED_PRODUCT_PRICE ?? "";

  return (

    <div className='w-full flex flex-col items-start select-none'>

      <div className='w-full relative pb-[calc(100%*1)]'>

        <div className="absolute inset-0 w-full flex flex-col justify-center items-center">

          <div className='relative shadow-2xl h-full w-full flex max-h-full justify-center max-w-full transition-transform duration-200 ease-[ease-in-out] md:hover:scale-105'>
            <div className='w-full h-full '>
              <Image
                className='object-cover h-full w-full object-center rounded-xl'
                src={image}
                alt={image}
                layout="responsive"
                height={608}
                width={608}
                quality={100}
                priority={true}
              />
            </div>
            
          </div>

        </div>

      </div>

      <section className='w-full flex flex-col items-start'>

        <div className={`flex w-full items-center py-2 justify-between border-standard liveActionColor  rounded-lg my-5 border-2 px-2 space-x-2`}>

          <p className='flex text-xs font-black leading-[14.4px] items-center'>
            {saleType}
          </p>

          <p className="text-xs font-medium leading-[14.4px] text-right">
            {status}
          </p>

        </div>

        <div className='w-full flex flex-col space-y-5 items-start'>

          <h2 className="text-lg leading-[21px] font-medium uppercase"> 
            {title}
          </h2>

          <p className='font-medium text-lg leading-[22px]'>
            ${price}
          </p>

        </div>

      </section>

    </div>

  )

}

export default FakeFeaturedProduct