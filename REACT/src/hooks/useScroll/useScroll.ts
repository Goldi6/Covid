import useHeaderHeight from "../useHeaderHeight";
import { ScrollToSection } from "../../context/SectionsContext";
import useScrollToSection from "./useScrollToSection";
import useSectionObserver from "./useSectionObserver";






export default function useScroll(
    headerRef: React.RefObject<HTMLHeadElement>,
    navRef: React.RefObject<HTMLElement>,
    mainRef: React.RefObject<HTMLElement>,
    sectionRefs: React.RefObject<HTMLElement>[]
  ): {
    scrollToSection: ScrollToSection;
    activeSectionId: string | null;
  } {
    const getHeaderHeight = useHeaderHeight(headerRef, navRef);
  
    // Use the custom hooks
    const scrollToSection = useScrollToSection(mainRef, getHeaderHeight);
    const activeSectionId = useSectionObserver(mainRef, sectionRefs);
  
    return { scrollToSection, activeSectionId };
  }
  