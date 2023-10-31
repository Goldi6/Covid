import { useState, useEffect } from "react";
import useHeaderHeight from "./useHeaderHeight";

export default function useWindowResize( headerRef: React.RefObject<HTMLHeadElement>,
    navRef: React.RefObject<HTMLElement>): number | null {
  
    const [stickyHeight, setStickyHeight] = useState<null | number>(null);
  
    const getHeaderHeight = useHeaderHeight(headerRef, navRef);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setStickyHeight(() => getHeaderHeight());
      };
      const initialHeight = getHeaderHeight();
      setStickyHeight(initialHeight);
      window.scrollTo(0, 0);
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, [getHeaderHeight]);
    return stickyHeight;
  }