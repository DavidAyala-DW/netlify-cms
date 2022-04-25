const standardModeColors = {
  dark: "white",
  light: "black"
}

const standardOriginalColors = {
  dark: "black",
  light: "white"
}

const primaryColor = {

  Brand : "#FF3567",
  Purple : "#7A73FC",
  Yellow: "#FCC02A",
  Blue : "#1586F6",
  Green: "#12AC12",
  Orange: "#F8981D",
  Red: "#F54A4A",
  Cyan: "#1BBDD4",
  Brown: "#7A5648",
  Grey: "#93979F",
  Black: "#000000",
  White: "#FFFFFF"

};

const secondaryColor = {

  Brand : "rgba(255, 155, 180, 0.15)",
  Purple : "rgba(172, 107, 173, 0.15)",
  Yellow: "rgba(249, 237, 55, 0.15)",
  Blue : "rgba(71, 142, 204, 0.15)",
  Green: "rgba(138, 196, 75, 0.15)",
  Orange: "rgba(248, 152, 29, 0.15)",
  Red: "rgba(240, 68, 56, 0.15)",
  Cyan: "rgba(27, 189, 212, 0.15)",
  Brown: "rgba(122, 86, 72, 0.15)",
  Grey: "rgba(135, 146, 161, 0.15)",
  Black: "rgba(0, 0, 0, 0.5)",
  White: "rgba(255, 255, 255, 0.25)"
  
};

export const assignColors = () => {

  const currentStandardMode = standardModeColors[process.env.NEXT_PUBLIC_STANDARD_MODE.replaceAll('"',"")] ?? "white";
  document.querySelector("body").style.color = currentStandardMode;
  const currentStandardOriginal = standardOriginalColors[process.env.NEXT_PUBLIC_STANDARD_MODE.replaceAll('"',"")] ?? "black";
  const currentPrimaryColor = primaryColor[process.env.NEXT_PUBLIC_PRIMARY_COLOR.replaceAll('"',"")] ?? (process.env.NEXT_PUBLIC_PRIMARY_COLOR != "" ? process.env.NEXT_PUBLIC_PRIMARY_COLOR : "white");
  const currentSecondaryColor = secondaryColor[process.env.NEXT_PUBLIC_SECONDARY_COLOR.replaceAll('"',"")] ?? (process.env.NEXT_PUBLIC_SECONDARY_COLOR != "" ? process.env.NEXT_PUBLIC_SECONDARY_COLOR : "rgba(255, 255, 255, 0.25)");
  const buttonShapeValue = process.env.NEXT_PUBLIC_BUTTON_SHAPE ?? "";

  document.documentElement.style.setProperty('--standard-mode', currentStandardMode );
  document.documentElement.style.setProperty('--standard-original', currentStandardOriginal );
  document.documentElement.style.setProperty('--color-primary', currentPrimaryColor );
  document.documentElement.style.setProperty('--color-secondary', currentSecondaryColor );

  let liveColor;
  if(currentPrimaryColor != "white" && currentPrimaryColor != "black" && currentPrimaryColor != "#FFFFFF" && currentPrimaryColor != "#000000"){
    liveColor = currentPrimaryColor;
  }else{
    liveColor = "#ff3567";
  }

  const liveActionColor = document.querySelector(".liveActionColor");
  if(liveActionColor){
    liveActionColor.style.borderColor = liveColor;
    liveActionColor.style.color = liveColor;
  }


  const liveActionBg = document.querySelector(".liveActionBg");
  if(liveActionBg){
    liveActionBg.style.backgroundColor = liveColor;
  }
  
  const closeUP = document.querySelector(".closeUP");
  if(closeUP){
    closeUP.style.borderColor = liveColor;
    closeUP.style.backgroundColor = liveColor;
  }

  const buttonShapeTags = document.querySelectorAll(".buttonShape");
  let buttonShape;

  if(buttonShapeValue == "none"){
    buttonShape = "0px";
  }

  if(buttonShapeValue == "smooth"){
    buttonShape = "4px";
  }

    if(buttonShapeValue == "full"){
    buttonShape = "80px";
  }

  buttonShapeTags.forEach( t => {
    console.log(t);
    t.style.borderRadius = buttonShape
  } );


  const bodyAndNavbar = document.querySelector("body,.bg-NavBar");
  bodyAndNavbar.style.backgroundColor = currentStandardOriginal;

  const bg_contact_footer = document.querySelector(".bg_contact_footer");

  if(bg_contact_footer){
    if(currentStandardOriginal == "black"){
      bg_contact_footer.classList.add("bg-white");
    }
  
    if(currentStandardOriginal == "white"){
      bg_contact_footer.classList.add("bg-black");
    }
  }

  // const filter_logo_footer = document.querySelector(".filter_logo_footer");
  
  

  const HeadlineFont = process.env.NEXT_PUBLIC_HEADLINES_FONT_FAMILY;
  const BodyFont = process.env.NEXT_PUBLIC_BODY_FONT_FAMILY;
  const RemoteHeadlineFontName = process.env.NEXT_PUBLIC_GOOGLEFONT_HEADLINES_FONT_FAMILY;
  const RemoteBodyfontName = process.env.NEXT_PUBLIC_GOOGLEFONT_BOY_FONT_FAMILY;

  const body = document.querySelector("Body");
  BodyFont ? body.style.fontFamily = BodyFont : null;
  RemoteBodyfontName ? body.style.fontFamily = RemoteBodyfontName : null;

  const headlines = document.querySelectorAll("H1,H2,H3,H4,H5");
  headlines.forEach(tag => {

    HeadlineFont ? tag.style.fontFamily = HeadlineFont : null;
    RemoteHeadlineFontName ? tag.style.fontFamily = RemoteHeadlineFontName : null;
  
  })

}

