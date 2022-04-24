import React from 'react'

const title = process.env.NEXT_PUBLIC_ABOUT_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_ABOUT_DESCRIPTION ?? "";

function About() {
  return (

    <section className='max-w-[1440px] px-4 md:px-20 mx-auto h-full flex flex-col items-center pt-20 md:pt-[140px]'>

      <h3 className='text-center font-black text-[32px] md:text-[52px] leading-[52px] mb-4 md:mb-6'>
        {title}
      </h3>
      
      <p className='max-w-[630px] mx-auto text-center text-base font-normal leading-[160%] md:leading-6 '>
        {description}
      </p>

    </section>

  )
}

export default About