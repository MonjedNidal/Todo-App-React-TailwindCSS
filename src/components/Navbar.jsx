import { useState, useEffect } from "react";
import DesktopLight from "../images/bg-desktop-light.jpg";
import DesktopDark from "../images/bg-desktop-dark.jpg";
import MobileLight from "../images/bg-mobile-light.jpg";
import MobileDark from "../images/bg-mobile-dark.jpg";

function Navbar({ isDarkTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isDarkTheme ? (
        windowWidth > 642 ? (
          <img src={DesktopDark} alt="" className="w-screen h-60" />
        ) : (
          <img src={MobileDark} alt="" className="w-screen h-60" />
        )
      ) : windowWidth > 642 ? (
        <img src={DesktopLight} alt="" className="w-screen h-60" />
      ) : (
        <img src={MobileLight} alt="" className="w-screen h-60" />
      )}
    </div>
  );
}

export default Navbar;
