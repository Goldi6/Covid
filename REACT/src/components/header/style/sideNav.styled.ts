import styled, { keyframes } from "styled-components";

import { headerSchema } from "../../../assets/styleSchema";
const schema = headerSchema.sideNav;

const aside = headerSchema.sideNav.aside;
const menu = headerSchema.sideNav.menu;

const backgroundFadeIn = keyframes`
    0% {
        background-color: #eff5f900;
    }
    
    100% {
        background-color: #00000080;
    }
`;

export const Modal = styled.div`
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  animation-name: ${backgroundFadeIn};
  animation-duration: 0.5s;
  z-index: 200;
`;

export const Aside = styled.nav`
  background-color: ${aside.background};
  box-shadow: ${aside.boxShadow};
  border-top: ${aside.borderTop};
  width: ${aside.width};
  height: 100%;
  transition: width 0.75s ease-out;
  * {
    font-size: ${schema.fontSize};
    font-weight: bold;
  }
  @media (max-width: ${aside.breakPoint}) {
    width: 100%;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  /* padding-inline-end: 20px;
  padding-inline-start: 20px;
  transition: 0.25s; */
  height: fit-content;
  padding: 0 20px;
  margin: 16px 0;

  li:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CloseButton = styled.button`
  position: relative;
  top: 3px;
`;
export const AsideMenuButton = styled.button`
  padding: 1px 14px 1px 0;
  margin: 3px 0;
  height: 38px;
  display: flex;
  align-items: center;
`;

export const MenuSectionList = styled.ul`
  border-top: solid 1px #d8dde0;
  padding-top: 7px;
  margin-top: 7px;
  list-style: none;
  li {
    a {
      padding: 1px 14px 1px 0;
      margin: 3px 0;
      height: 38px;
      display: flex;
      align-items: center;
      color: inherit;
      width: 100%;
    }
    a.active {
      background-color: #e0e0e0;
      border-radius: 5px;
    }
  }
`;

export const AsideHomeButton = styled.button`
  padding: 1px 14px 1px 0;
  margin: 3px 0;
  height: 38px;

  span {
    padding: ${menu.homeButton.textPadding};

    color: inherit;
  }
`;
