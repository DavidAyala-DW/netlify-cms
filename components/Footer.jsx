import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (
    <>
      
      <footer className="pt-20 pb-[45px] md:pb-[107px]  md:pt-0 bg-standardO text-standard mx-auto flex w-full items-center justify-center space-x-3">

        <p className="uppercase tracking-[.36em] text-[11px] font-medium">Powered By</p>

        <a className="block" href="https://www.bitski.com/" target="_blank" rel="noopener noreferrer">
          <Bitski className="filter_logo_footer" />
        </a>

      </footer>

    </>
  );
};

export default Footer;
