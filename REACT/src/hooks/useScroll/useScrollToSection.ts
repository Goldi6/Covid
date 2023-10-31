import { ScrollToSection } from "../../context/SectionsContext";

export default function useScrollToSection(
    mainRef: React.RefObject<HTMLElement>,
    getHeaderHeight: () => number | null
  ): ScrollToSection {
  
  
    const scrollToSection: ScrollToSection = (sectionRef) => {
      if (sectionRef && sectionRef.current) {
        const headerHeight = getHeaderHeight();
        const elementPosition = sectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition - (headerHeight || 0);
  
        const mainElement = mainRef.current;
        if (mainElement) {
          mainElement.scrollBy({
            top: offsetPosition,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
  
    return scrollToSection;
  }