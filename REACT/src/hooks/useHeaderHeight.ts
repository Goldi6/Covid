import { useCallback } from "react";

export default function useHeaderHeight(
    headerRef: React.RefObject<HTMLHeadElement>,
    navRef: React.RefObject<HTMLElement>
  ): (() => number | null) {
    return useCallback(() => {
      const headHeight = headerRef.current?.offsetHeight;
      const navHeight = navRef.current?.offsetHeight;
  
      if (headHeight && navHeight) return headHeight + navHeight;
      else return null;
    }, [headerRef, navRef]);
  }