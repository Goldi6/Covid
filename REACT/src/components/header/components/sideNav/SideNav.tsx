import { asideNavHomeButton } from "../../../../content/aside_text";
import {
  Aside,
  AsideHomeButton,
  CloseButton,
  MenuList,
  Modal,
} from "../../style/sideNav.styled";
import AsideMenuSections from "./menu/AsideMenuSections";
import CSS from "csstype";
import { NavLink } from "react-router-dom";

type sidebarProps = {
  displayStyle: CSS.Properties;
  closePanel: () => void;
};

export default function SideNav(props: sidebarProps) {
  return (
    <Modal
      className="modal"
      style={props.displayStyle}
      onClick={props.closePanel}
    >
      <Aside>
        <MenuList>
          <li>
            <NavLink to={asideNavHomeButton.homeButton.href}>
              <AsideHomeButton>
                <img
                  src={asideNavHomeButton.homeButton.src}
                  alt={asideNavHomeButton.homeButton.alt}
                ></img>
                <span>{asideNavHomeButton.homeButton.text}</span>
              </AsideHomeButton>
            </NavLink>
            <CloseButton onClick={props.closePanel}>
              <img
                src={asideNavHomeButton.closeButton.src}
                alt={asideNavHomeButton.closeButton.alt}
              />
            </CloseButton>
          </li>
          <AsideMenuSections />
        </MenuList>
      </Aside>
    </Modal>
  );
}
