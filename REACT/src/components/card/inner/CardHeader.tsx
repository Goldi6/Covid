import { CardFlexHeader, CardTitle } from "../card.styled";
import { useContext } from "react";
import SVGdark from "../../../assets/tooltipIconDark.svg";
import SVGlight from "../../../assets/tooltipIconLight.svg";
import { ThemeContext } from "../../../context/ThemeContext";
import SharePanel from "./SharePanel/SharePanel";
import { TooltipPanel } from "./tooltip/tooltip.styled";
import useDisplayToggle from "../../../hooks/displayHook";
import { CardContext } from "../../../context/CardContext";
import Filter from "../../Filter/Filter";
import GraphHelpTags from "../../GraphHelpTags/GraphHelpTags";
import { cardType } from "../../../types/typesToApi";

function isCardType(obj: any): obj is cardType {
  return (obj as cardType).type !== undefined; 
}

export default function CardHeader() {
  const { isDisplayed, displayStyle, func } = useDisplayToggle("block", true);
  const themeContext = useContext(ThemeContext);

  const cardContext = useContext(CardContext);

  if (!cardContext) return <></>;

  const { setApiParams, cardData, apiParams } = cardContext;
  if (!cardData) return <></>;

  if(!isCardType(cardData) ){
    return <> 

  </>;
  }

  cardData as cardType;
  const { title, tooltip, shareable } = cardData;


  return (
    <div className="card-header">
      <CardFlexHeader>
        <CardTitle>{title}</CardTitle>
        <div
          style={{
            display: "inline-block",
            marginInlineStart: "0.5rem",
            minWidth: "1.25rem",
          }}
        >
          <img
            style={{ height: "20px", width: "20px" }}
            src={themeContext?.theme === "light" ? SVGdark : SVGlight}
            alt="info"
            onMouseEnter={func.open}
            onMouseLeave={func.close}
          />
          {isDisplayed && (
            <TooltipPanel
              onMouseEnter={func.open}
              onMouseLeave={func.close}
              style={displayStyle}
            >
              {tooltip}
            </TooltipPanel>
          )}
        </div>
        {shareable && <SharePanel />}
      </CardFlexHeader>
      {cardData?.filters && cardData.filters.length > 0 && (
        <Filter
          apiParams={apiParams}
          setApiParams={setApiParams}
          filters={cardData.filters}
          defaultApiParams={cardData.defaultApiParams}
          //fieldFiltersValues={fieldFiltersValues}
        />
      )}

      {cardData.colorHelpers && (
        <GraphHelpTags helpers={cardData.colorHelpers} type={cardData.type} />
      )}
    </div>
  );
}
