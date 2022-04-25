import React from 'react';
import Head from 'next/head'

const FontsInterstate = () => (

  <style jsx>{`

    @font-face {
      font-family: "Interstate";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/interstate/interstate-regular.woff") format("woff");
      font-display: swap;
    }

    @font-face {
      font-family: "Interstate";
      font-style: normal;
      font-weight: 600;
      src: url("/fonts/interstate/interstate-bold.woff") format("woff");
      font-display: swap;
    }

    @font-face {
      font-family: "Interstate";
      font-style: normal;
      font-weight: 200;
      src: url("/fonts/interstate/interstate-light.woff") format("woff");
      font-display: swap;
    }

    @font-face {
      font-family: "Interstate";
      font-style: normal;
      font-weight: 900;
      src: url("/fonts/interstate/interstate-black.woff") format("woff");
      font-display: swap;
    }

  `}</style>  

);

const FontsNeuMachina = () => (

  <style jsx>{`
    @font-face {
      font-family: "NeueMachina";
      font-style: normal;
      font-weight: 600;
      src: url("/fonts/neue/NeueMachina-Medium.woff") format("woff");
      font-display: swap;
    }
    
    @font-face {
      font-family: "NeueMachina";
      font-style: normal;
      font-weight: 200;
      src: url("/fonts/neue/NeueMachina-Ultralight.woff") format("woff");
      font-display: swap;
    }
    
    @font-face {
      font-family: "NeueMachina";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/neue/NeueMachina-Regular.woff") format("woff");
      font-display: swap;
    }
    
    @font-face {
      font-family: "NeueMachina";
      font-style: normal;
      font-weight: 900;
      src: url("/fonts/neue/NeueMachina-Ultrabold.woff") format("woff");
      font-display: swap;
    }
  `}</style>

)

const FontsMatterSQ = () => (
  <style jsx>{`
    @font-face {
      font-family: "Matter SQ";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/matter_sq/Matter SQ Regular.woff") format("woff");
      font-display: swap;
    }
  `}</style>
)

const FontsPangram = () => (
  <style jsx>{`

    @font-face {
      font-family: "Pangram Sans";
      font-style: normal;
      font-weight: 200;
      src: url("/fonts/Pangram_Sans/PPPangramSansRounded-Thin.otf");
    }
    
    @font-face {
      font-family: "Pangram Sans";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/Pangram_Sans/PPPangramSansRounded-CompactRegular.otf");
    }

    @font-face {
      font-family: "Pangram Sans";
      font-style: normal;
      font-weight: 600;
      src: url("/fonts/Pangram_Sans/PPPangramSansRounded-Medium.otf");
    }
    
    @font-face {
      font-family: "Pangram Sans";
      font-style: normal;
      font-weight: 900;
      src: url("/fonts/Pangram_Sans/PPPangramSansRounded-Bold.otf");
    }

  `}</style>  
)

const FontsEiko = () => (

  <style jsx>{`

    @font-face {
      font-family: "Eiko";
      font-style: normal;
      font-weight: 200;
      src: url("/fonts/eiko/PPEiko-Thin.otf");
    }

    @font-face {
      font-family: "Eiko";
      font-style: normal;
      font-weight: 300;
      src: url("/fonts/eiko/PPEiko-LightItalic.otf");
    }

    @font-face {
      font-family: "Eiko";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/eiko/PPEiko-Medium.otf");
    }

    @font-face {
      font-family: "Eiko";
      font-style: normal;
      font-weight: 600;
      src: url("/fonts/eiko/PPEiko-Medium.otf");
    }

    @font-face {
      font-family: "Eiko";
      font-style: normal;
      font-weight: 900;
      src: url("/fonts/eiko/PPEiko-Heavy.otf");
    }

  `}</style>

);

const FontsAcherus = () => (
  <style jsx>{`
    @font-face {
      font-family: "Acherus";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/Acherus/Horizon Type - AcherusGrotesque-Regular.otf");
    }
  `}</style>

)

const FontGoogle = ({url}) => (

  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href={url} rel="stylesheet"></link>
  </Head>

);

const arrayFonts = [

  {
    name: "Interstate",
    Component: FontsInterstate
  },
  {
    name: "NeueMachina",
    Component: FontsNeuMachina
  },
  {
    name: "Matter SQ",
    Component: FontsMatterSQ
  },
  {
    name : "Pangram Sans",
    Component: FontsPangram
  },
  {
    name: "Eiko",
    Component: FontsEiko
  },  
  {
    name: "Acherus",
    Component: FontsAcherus
  }

]


function handleInstallFont(mode){

  const HeadlineFont = process.env.NEXT_PUBLIC_HEADLINES_FONT_FAMILY;
  const BodyFont = process.env.NEXT_PUBLIC_BODY_FONT_FAMILY;

  const RemoteHeadlineFontURL = process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_URL;
  const RemoteHeadlineFontName = process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_FONT_FAMILY;

  const RemoteBodyfontURL = process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_URL;
  const RemoteBodyfontName = process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_FONT_FAMILY;

  if(mode == "headline"){


    if( arrayFonts.find(f => f.name == HeadlineFont ) && !RemoteHeadlineFontName  ){
      const {name, Component} = arrayFonts.find(f => f.name == HeadlineFont);

      return (

        <>

          <Component />
          <style jsx>{`
            
            h1,h2,h3,h4,h5,h6{
              font-family: ${name};
            }
  
          `}</style>
        </>

      )
      
    }



    if(RemoteHeadlineFontName){
      return (
  
        <>
          <FontGoogle url={RemoteHeadlineFontURL} />
          <style jsx>{`
            
            h1,h2,h3,h4,h5,h6{
              font-family: ${RemoteHeadlineFontName};
            }
  
          `}</style>
        </>
        
      )
  
    }

  }

  if(mode == "body"){

    if( arrayFonts.find( f =>  f.name == BodyFont ) != undefined && !RemoteBodyfontName){
      
      const {name, Component} = arrayFonts.find( f =>  f.name == BodyFont );
      return (

        <>

          <Component />

          <style jsx>{`
            
            body{
              font-family: ${name};
            }
  
          `}</style>

        </>

      )
      
    }



    if(RemoteBodyfontName){

      return (
  
        <>
          <FontGoogle url={RemoteBodyfontURL} />
          <style jsx>{`
            
            body{
              font-family: ${RemoteBodyfontName};
            }
  
          `}</style>
        </>
        
      )
  
    }

  }


}


function Fonts() {

  return (

    <>

      {
        handleInstallFont("headline")
      }

      {
        handleInstallFont("body")
      }

    </>

  )

}

export default Fonts