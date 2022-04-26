import {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }) => {

  const [navContent, setNavContent] = useState(null);
  function handleContent(content) {
    setNavContent(content);
  }

  return (
    <div className="mx-auto w-full">
      <div>
        <Navbar navContent={navContent} />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
