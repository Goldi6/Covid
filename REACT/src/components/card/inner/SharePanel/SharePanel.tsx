import useDisplayToggle from "../../../../hooks/displayHook";
import SVGdarkOptions from "../../../../assets/shareOptionsDark.svg";
import SVGlightOptions from "../../../../assets/shareOptionsLight.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { SharePanel as Panel, SharePanelButton } from "./SharePanel.styled";
import shareSVGdark from "../../../../assets/shareDark.svg";
import shareSVGlight from "../../../../assets/shareLight.svg";
import downloadSVGdark from "../../../../assets/downloadDark.svg";
import downloadSVGlight from "../../../../assets/downloadLight.svg";

export default function SharePanel() {
  const { isDisplayed, displayStyle, func } = useDisplayToggle("flex", true);
  const themeContext = useContext(ThemeContext);

  return (
    <div style={{ position: "absolute", left: 0 }}>
      <button style={{ position: "absolute", left: 0 }} onClick={func.toggle}>
        <img
          src={
            themeContext?.theme === "light" ? SVGdarkOptions : SVGlightOptions
          }
          alt=""
        />
      </button>
      {isDisplayed && (
        <Panel style={displayStyle} onMouseLeave={func.close}>
          <SharePanelButton name="share" onClick={func.close}>
            <div className="circle">
              <img
                src={
                  themeContext?.theme === "light" ? shareSVGdark : shareSVGlight
                }
                alt="share"
              />
            </div>
            <span>לשיתוף</span>
          </SharePanelButton>
          <SharePanelButton name="download" onClick={func.close}>
            <div className="circle">
              <img
                src={
                  themeContext?.theme === "light"
                    ? downloadSVGdark
                    : downloadSVGlight
                }
                alt="download"
              />
            </div>
            <span>להורדה</span>
          </SharePanelButton>
        </Panel>
      )}
    </div>
  );
}
