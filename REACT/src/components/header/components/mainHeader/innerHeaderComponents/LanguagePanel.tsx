import { Panel, PanelButton } from "../../../style/header.styled";
import useDisplayToggle from "../../../../../hooks/displayHook";
import { headerTextContent } from "../../../../../content/header_text";

export default function LanguagePanel() {
  const { isDisplayed,displayStyle, func } = useDisplayToggle("flex", true);

  return (
    <div>
      <button>
        <img
          src={headerTextContent.languageButton.src}
          alt={headerTextContent.languageButton.alt}
          onClick={func.toggle}
        />
      </button>
     { isDisplayed &&<Panel style={displayStyle} onMouseLeave={func.close}>
        {headerTextContent.languageList.map((lang) => {
          return (
            <PanelButton key={lang.symbol} onClick={func.close}>
              {lang.name}
            </PanelButton>
          );
        })}
      </Panel>}
    </div>
  );
}
