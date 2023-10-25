import "./App.css";
import { useState, useEffect } from "react";
import { NavBar, Hero, OurTeam, Footer1, Footer2, Services, BusinessFocus, End2End} from './components/imports';
import useMediaQuery from "./hooks/useMediaQuery";
import SmallScreenComponenet from "./components/innerComponents/SmallScreenComponenet";



function App() {
  const [isTopOfPage, setisTopOfPage] = useState(true);
    const isAboveSmallScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="">
      <NavBar isTopOfPage={isTopOfPage} />
      <Hero />
      <Services />
      <End2End />
      <OurTeam />
      { isAboveSmallScreens ? (
        <BusinessFocus/>
      ) : (<SmallScreenComponenet/>) }
      <Footer1 />
      <Footer2/>
    </div>
  );
}

export default App;
