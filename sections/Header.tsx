import Ingredients from "components/Header/Ingredients";
import PhotoWall from "components/Header/PhotoWall";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  
  return (
    <div id="header" className="animated-gradient-bg h-screen relative">
      {/* Animated dots */}
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full grid place-items-center place-content-center gap-4">
        {/* Logo */}
        <Image 
          src="/images/SN.png" 
          width={500} 
          height={140} 
          alt="Amruth Pillai" 
          priority 
          className="relative z-10"
        />
        
        {/* Ingredients */}
        <Ingredients />
        
        {/* Social Profiles */}
        <Profiles />
      </div>
    </div>
  );
};

export default Header;