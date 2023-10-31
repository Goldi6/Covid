import { useContext } from "react";
import { Nav } from "./Nav.styled";
import { navButton } from "./types";
import { SectionsContext } from "../../context/SectionsContext";
import SectionsNavLink from "./NavLink";

type navProps = {
  navList: navButton[];
};

export default function SectionNav({ navList }: navProps) {
  const sectionsContext = useContext(SectionsContext);
  return (
    <Nav id="section-nav" ref={sectionsContext?.navRef}>
      <ul>
        {navList.map((item: navButton, i) => {
          return (
            <SectionsNavLink
              key={i}
              item={item}
              itemRef={
                sectionsContext?.sectionRefs[i] !== undefined
                  ? sectionsContext.sectionRefs[i]
                  : null
              }
            />
          );
        })}
      </ul>
    </Nav>
  );
}
