import { ReactNode, RefObject, createContext, createRef, useEffect, useRef, useState } from "react";
import { sectionsType  } from "../types/typesToApi";
import useScroll from "../hooks/useScroll/useScroll";
import useWindowResize from "../hooks/useHeaderResize";

export type contextProviderProps = {
  children: ReactNode;
};


export type ScrollToSection = (
  sectionRef: RefObject<HTMLElement>
) => void;

export type contextValueType = {
  scrollToSection: ScrollToSection;
  stickyHeight: number | null;
  sections: sectionsType;
  sectionRefs: RefObject<HTMLElement>[];
  headerRef: RefObject<HTMLHeadElement>;
  navRef: RefObject<HTMLElement>;
  mainRef: RefObject<HTMLElement>;
  activeSectionId: string | null;
};

export const SectionsContext = createContext<contextValueType | null>(null);








export default function SectionsContextProvider({
  children,sections
}: contextProviderProps & { sections: sectionsType }) {

  //those refs are forwarded to the children and then set for the usage of scroll and resize hooks
  const headerRef: RefObject<HTMLHeadElement> = useRef(null);
  const navRef: RefObject<HTMLElement> = useRef(null);
  const mainRef: RefObject<HTMLElement> = useRef(null);


  const [sectionRefs, setSectionRefs] = useState<
    RefObject<HTMLElement>[]
  >([]);

  useEffect(() => {
    //create array of length with refs
    const newSectionRefs = Array.from({ length: sections.length }, () =>
      createRef<HTMLElement>()
    );
  
    setSectionRefs(newSectionRefs);
  }, [sections.length]);
  
  


  const stickyHeight = useWindowResize(headerRef, navRef);


  const {  scrollToSection, activeSectionId } = useScroll(
    headerRef,
    navRef,
    mainRef,
    sectionRefs
  );

// console.info('SectionContext Rerender')
  return (
    <SectionsContext.Provider
      value={{
        stickyHeight,
        scrollToSection,
        sections,
        sectionRefs,
        headerRef,
        navRef,
        mainRef,
        activeSectionId,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
}



