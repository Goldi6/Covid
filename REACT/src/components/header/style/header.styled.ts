import styled from "styled-components";
import { headerSchema } from "../../../assets/styleSchema";

const { header } = headerSchema;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  color: ${header.textColor};
  display: flex;
  flex-wrap: wrap;
  padding: 14px 10px 13px 29px;
  align-items: center;
  justify-content: stretch;
`;

export const TitleContainer = styled.div`
  padding: 5px 0;
  margin: 0 22px 0 30px;
  flex-grow: 3;
  h1 {
    line-height: 1;
    font-size: 1.5rem;
    white-space: nowrap;

    font-weight: 700;

    @media screen and (max-width: ${header.breakPoint}) {
      font-size: 1.2rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: 47px;
  padding-right: 32px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    padding: 0 6px;
  }
`;

export const LastUpdateContainer = styled.div`
  font-weight: bold;
  color: ${header.greyTextColor};
  font-size: 0.875rem;
  padding-left: 29px;
  padding-top: 10px;
  height: 100%;
  align-self: flex-start;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  div:first-child {
    padding-top: 6px;
    position: relative;
  }

  div > button {
    padding: 1px 6px;
  }

  @media screen and (max-width: ${header.breakPoint}) {
    position: absolute;
    left: 0;
    top: 14px;
  }
`;

export const PanelButton = styled.button`
  font-size: 16px;
  padding: 8px 16px !important;
  color: #000;

  background-color: #fff;
  &:hover {
    background-color: #fff;
  }
`;

export const Panel = styled.div`
  position: absolute;
  top: 29px;
  left: 0;
  display: flex;
  flex-direction: column;
  border: ${header.lightBorder};
  border-radius: 0.5rem;
  overflow: hidden;
  button:nth-child(2) {
    border-top: ${header.lightBorder};
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #4bb887, #16b6d0, #d6e58a);
  transition: all 8s;
  z-index: 1;

  &#active {
    left: 0;
  }
`;
