import {useEffect, useState} from "react";
import Image from "next/image";
import HeroGridDesktop from "../public/Vector (15).svg";
import HeroGridMobile from "../public/grid_footer.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const imageDesktop = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE_DESKTOP) ?? "";
const imageMobile = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE_MOBILE) ?? "";
const logoFileName = "/".concat(process.env.NEXT_PUBLIC_NAVBAR_LOGO);

const cta_text = process.env.NEXT_PUBLIC_HERO_CTA_TEXT ?? "";
const cta_link = process.env.NEXT_PUBLIC_HERO_CTA_LINK ?? "/";

const Hero = () => {


  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [viewportDesktop, setViewPortDesktop] = useState(false);

  useEffect(() => {

    if(logoFileName != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = logoFileName;
      image.onload = () => {
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
      
    }

    if(typeof window !== "undefined"){
      if(window.innerWidth > 768){
        setViewPortDesktop(true);
      }else{
        setViewPortDesktop(false);
      }
    }

  }, []);

  useEffect(() => {

    if(typeof window !== "undefined"){

      function handleResize(){

        if(window.innerWidth > 768){
          setViewPortDesktop(true);
        }else{
          setViewPortDesktop(false);
        }

      }

      window.addEventListener("resize",handleResize);

      return window.removeEventListener("resize",handleResize,true);

    }

  }, []);

  return (
    <>

      <section className="md:h-[432px] lg:h-[434px] w-full mx-auto flex flex-col justify-center items-center  px-4 md:px-20 relative pb-20 md:pb-0 lg:pb-20">

        <div className="absolute inset-0 w-full h-full max-h-full">
    
          <div className="relative w-full h-full max-h-full  md:max-w-[536px] lg:max-w-[770px] ml-auto">

          <div className="absolute top-0 right-0 w-full h-max ml-auto md:ml-auto md:h-[95%] lg:h-full transition md:translate-y-[-15px]">  

            {

              !viewportDesktop && (
                <HeroGridMobile className="stroke-primary w-full  !h-max opacity-20" />
              )
              
            }

            {
              
              viewportDesktop && (
                <HeroGridDesktop className="stroke-primary w-full !h-max md:max-h-[453px] lg:max-h-[auto]" />
                // <FooterGrid className="stroke-primary w-full !h-max opacity-30" />
              )

            }

            

          </div>

          </div>

        </div>

        <div className="md:absolute inset-0 w-full h-full items-center flex flex-col md:justify-end lg:justify-start pt-16 md:pb-[46px] lg:pb-0 lg:pt-[119px] z-20">

          <div className="w-full flex mb-10 min-h-[58.8px] justify-center ">

            {
              isLoadImage && (
                
                <a className="max-w-[120px] md:max-w-[150px] w-full block" target="_blank" href="nft.pwrfwd.co" rel="noopener noreferrer">
                  <Image
                    src={logoFileName}
                    priority={true}
                    alt={logoFileName.replace("/","")}
                    width={width}
                    height={height}
                  />  

                </a>

              )
            }
            
          </div>

            <h1 className="max-w-[955px] font-black px-1 md:px-0 w-full text-[52px] leading-[100%] md:text-[64px] md:leading-[64px] text-center mb-7">
              {title}
            </h1>

            <p className="max-w-[641px] font-medium w-full text-center text-base leading-[160%] md:leading-[25px] ">
              {description}
            </p>

        </div>

      </section>

    </>
  );
};

export default Hero;
