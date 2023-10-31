import { useContext } from "react";
import useDisplayToggle from "../../../hooks/displayHook";
import { ThemeContext } from "../../../context/ThemeContext";
import arrowSVGdark from "../../../assets/arrowDark.svg";
import arrowSVGlight from "../../../assets/arrowLight.svg";
import { Button, Panel, PanelLink } from "./RelatedLinks.styled";
import { relatedLinkType } from "../../../types/typesToApi";

type relatedLinksProps = {
  relatedLinks: relatedLinkType[];
};

export default function RelatedLinks({ relatedLinks }: relatedLinksProps) {
  const { isDisplayed,displayStyle, func } = useDisplayToggle("flex", true);
  const themeContext = useContext(ThemeContext);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button onClick={func.toggle}>
        <span>לינקים בנושא</span>
        <img
          src={themeContext?.theme === "light" ? arrowSVGdark : arrowSVGlight}
          alt=""
        />
      </Button>
     {isDisplayed && <Panel style={displayStyle} onMouseLeave={func.close}>
        {relatedLinks.map((linkData) => {
          return (
            <PanelLink key={linkData.href} href={linkData.href} target="_blank">
              <div>
                <img
                  src="https://datadashboard.health.gov.il/assets/images/internet.png"
                  alt="internet"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
              <div>
                <strong>{linkData.title}</strong>
                {linkData.subTitle && <p>{linkData.subTitle}</p>}
                {linkData.subLinkText && <span>{linkData.subLinkText}</span>}
              </div>
            </PanelLink>
          );
        })}
      </Panel>}
    </div>
  );
}
