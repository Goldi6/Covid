import { useContext, useEffect, useState } from "react";
import { SectionsContext } from "../../context/SectionsContext";
import { navButton } from "./types";
import { StyledLink } from "./Nav.styled";

type navLinkType = {
  item: navButton;
  itemRef: React.RefObject<HTMLElement> | null;
};

export default function SectionsNavLink({ item, itemRef }: navLinkType) {
  const [isActive, setIsActive] = useState(false);
  const sectionsContext = useContext(SectionsContext);
  const activeId = sectionsContext?.activeSectionId;

  useEffect(() => {
    let mount = true;
    if (mount) {
      if (activeId === item.id) {
        setIsActive((curr) => true);
      } else {
        setIsActive((curr) => false);
      }
    }

    return () => {
      mount = false;
    };
  }, [activeId, item.id]);

  return (
    <StyledLink className={isActive ? "active" : ""}>
      <a
        href={"#" + item.id}
        onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          if (itemRef) {
            sectionsContext?.scrollToSection(itemRef);
          }
        }}
      >
        {item.title}
      </a>
    </StyledLink>
  );
}
