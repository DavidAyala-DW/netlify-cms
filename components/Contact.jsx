import {useEffect, useState} from 'react'
import Image from "next/image";
import Grid from "../public/footer_grid.svg";
import { arraySocialMedia } from '../helpers';
// import LogoContact from "../public/logoContact.png";

const logoFileName = '/' +process.env.NEXT_PUBLIC_CONTACT_LOGO;
const footerImage = "/" + process.env.NEXT_PUBLIC_MAIN_IMAGE;
const title = process.env.NEXT_PUBLIC_CONTACT_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_CONTACT_DESCRIPTION ?? "";

function Contact() {

  return (

    <section className='px-4 md:px-0 pt-2 pb-10 lg:pb-[180px] mx-auto w-full h-full lg:min-h-full relative overflow-hidden flex flex-col items-center bg-standardO '>

      <div className="max-w-[1440px] w-full h-full mx-auto flex flex-col items-center">


        <div className="flex flex-col items-center text-standard">

          <div className="w-full flex max-w-max mx-auto items-center space-x-9 md:space-x-[45px]">

            { arraySocialMedia.map( (child,index) => {

              const {Icon,URL} = child;
              
              if(URL != ""){
                
                return(

                  <a className="block md:hover:scale-125 transition" rel="noreferrer" target={"_blank"} href={URL} key={index}>
                    <Icon className="fill-primary w-6 h-auto md:h-[inherit] md:w-10" />
                  </a>
                  
                )
              }

            })}

          </div>

        </div>
        
      </div>

    </section>

  )

}

export default Contact