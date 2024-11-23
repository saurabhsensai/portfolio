import Ingredients from "components/Header/Ingredients";
import PhotoWall from "components/Header/PhotoWall";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  
  return (
    <div id="header" className="animated-gradient-bg min-h-screen relative w-full">
      {/* Animated dots - responsive sizes */}
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center gap-4 px-4 py-8">
        {/* Logo */}
        <div className="w-full max-w-[500px] px-4 sm:px-0">
          <Image 
            src="/images/SN.png" 
            width={500} 
            height={140} 
            alt="Amruth Pillai" 
            priority 
            className="w-full h-auto"
          />
        </div>
        
        {/* Ingredients */}
        <Ingredients />
        
        {/* Social Profiles */}
        <Profiles />
      </div>
    </div>
  );
};

export default Header;