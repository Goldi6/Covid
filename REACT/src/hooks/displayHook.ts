import { useState } from "react";
import { CSSDisplay } from "../GlobalTypes/types";

export default function useDisplayToggle(
  displayType: CSSDisplay,
  initialStateIsDisplayNone: boolean,
  isModal: boolean = false
) {
  const initialState = initialStateIsDisplayNone ? "none" : displayType;
  const [panelDisplay, setPanelDisplay] = useState<CSSDisplay>(initialState);
  const displayStyle = { display: panelDisplay };
  const [isDisplayed, setIsDisplayed] = useState(
    initialStateIsDisplayNone ? false : true
  );

  const initialClassN = initialStateIsDisplayNone ? "" : "open";
  const [classN, setClassN] = useState<"open" | "">(initialClassN);

  function setBodyScroll(isScrollable: boolean) {
    if (isScrollable) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }

  function open() {
    setPanelDisplay(displayType);
    setClassN("open");
    if (isModal) setBodyScroll(false);
    setIsDisplayed(true);
  }

  function close() {
    setPanelDisplay("none");
    setClassN("");
    if (isModal) setBodyScroll(true);
    setIsDisplayed(false);
  }

  function toggle() {
    if (panelDisplay === displayType) {
      close();
    } else {
      open();
    }
  }

  return {
    isDisplayed,
    displayStyle,
    func: {  open, close, toggle },
    classN,
  };
}
