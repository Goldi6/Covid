import { MenuSectionList } from "../../../style/sideNav.styled";

import { asideNavTextContent } from "../../../../../content/aside_text";
import { NavLink } from "react-router-dom";
export default function AsideMenuSections() {
  return (
    <>
      {asideNavTextContent.map((section) => {
        return (
          <li key={section.id}>
            <MenuSectionList>
              {section.links.map((linkData) => {
                return (
                  <li key={linkData.name}>
                    <NavLink
                      to={linkData.href}
                      className={({
                        isActive,
                      }: {
                        isActive: boolean;
                      }): string => (isActive ? "active" : "")}
                    >
                      {linkData.name}
                    </NavLink>
                  </li>
                );
              })}
            </MenuSectionList>
          </li>
        );
      })}
    </>
  );
}
