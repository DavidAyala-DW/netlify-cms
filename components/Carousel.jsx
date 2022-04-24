import React from 'react'
import Image from "next/image";
import { hash } from '../helpers';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper";
import CustomProductViewer from './CustomProductViewer';


const textImages = process.env.NEXT_PUBLIC_CAROUSEL_ARRAY_IMAGES ?? "";
const arrayImages = textImages.split(",");

function Carousel() {

  return (

    <section className='px-0 w-full h-full pt-[50px] pb-[45px] md:pt-[120px] md:pb-[120px] lg:pb-[140px] flex flex-col mx-auto'>

      <div className='flex h-full w-full'>

        <Swiper 
                  
          loop={true}
          speed={1000}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          autoplay={
            {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }
          }
          breakpoints = {{

            320: {
              slidesPerView: "auto",
              spaceBetween: 8
            },
            420: {
              slidesPerView: "auto",
              spaceBetween: 8
            },
            480: {
              slidesPerView: "auto",
              spaceBetween: 20
            },
            560: {
              slidesPerView: "auto",
              spaceBetween: 40
            },
            1080:{
              slidesPerView: 3,
              spaceBetween: 40
            }


          }}
          modules={[EffectCoverflow,Autoplay]}
          className = "w-full flex items-center"
        >

          {

            arrayImages.map((item) => {
              
              if(item.length > 0){
                
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

                const image = item.toString().trim().replaceAll("'","").replaceAll('"',"");

                return (
                  
                  <SwiperSlide className='flex flex-col h-full justify-center !w-[calc(100vw-32px)]  max-w-[388px] md:max-w-[400px]' key={hash(image)}>
                    {
                      (
                        <div className='w-full h-full relative pb-[calc(100%*1)] max-h-[400px]' >

                          <div className="absolute inset-0 w-full flex flex-col justify-center items-center">

                            <div className="h-full w-full" data-src={item}>
                              <Image
                                className="select-none object-cover h-full w-full object-center rounded-[32px]"
                                src={"/"+image}
                                alt={item}
                                width={400}
                                height={400}
                                layout="responsive"
                                priority={true}

                              />
                            </div>

                          </div>

                        </div>
                        // <CustomProductViewer product={item}/>
                      )
                    }
                  </SwiperSlide>
                  
                )
              }else{
                console.log(`The id ${item.id} doesn't exists or is wrong`);
              }

            })

          }
          
        </Swiper>

      </div>

    </section>

  )

}

export default Carousel