import {
  Header,
  IconsContainer,
  LastUpdateContainer,
  Line,
  LogoContainer,
  LogoWrapper,
  TitleContainer,
} from "../../style/header.styled";

import { headerTextContent } from "../../../../content/header_text";
import { useContext, useEffect, useRef } from "react";
import getDateAndTime from "../../utils.js/getDateString";
import LanguagePanel from "./innerHeaderComponents/LanguagePanel";
import ThemeButton from "./innerHeaderComponents/ThemeButton";
import { SectionsContext } from "../../../../context/SectionsContext";

type HeaderProps = {
  lastUpdate: Date;
  openNav: () => void;
};

export default function MainHeader({ lastUpdate, openNav }: HeaderProps) {
  const { date, time } = getDateAndTime(lastUpdate);
  const sectionsContext = useContext(SectionsContext);

  const lineClass = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lineClass.current?.setAttribute("id", "active");
  }, []);
  return (
    <>
      <Header id="header" ref={sectionsContext?.headerRef}>
        <Line ref={lineClass}></Line>
        <LogoContainer>
          <button id="burger-menu-btn" onClick={openNav}>
            <img
              src={headerTextContent.burgerButton.icon}
              alt={headerTextContent.burgerButton.alt}
            />
          </button>
          <LogoWrapper>
            <a href={headerTextContent.logo.href}>
              <img
                src={headerTextContent.logo.src}
                alt={headerTextContent.logo.alt}
                style={{ height: "100%" }}
              />
            </a>
          </LogoWrapper>
        </LogoContainer>
        <TitleContainer>
          <h1>{headerTextContent.mainTitle}</h1>
        </TitleContainer>
        <LastUpdateContainer>
          <span>{headerTextContent.smallTitle} </span>
          <span>
            {date} {time}
          </span>
        </LastUpdateContainer>
        <IconsContainer>
          <LanguagePanel />
          <ThemeButton />
        </IconsContainer>
      </Header>
    </>
  );
}
