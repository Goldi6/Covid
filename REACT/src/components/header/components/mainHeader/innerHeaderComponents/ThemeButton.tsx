import { useContext } from "react";
import { headerTextContent } from "../../../../../content/header_text";
import { ThemeContext } from "../../../../../context/ThemeContext";

export default function ThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() => {
          theme?.toggleAppTheme();
        }}
      >
        <img
          src={headerTextContent.themeButton.src}
          alt={headerTextContent.themeButton.alt}
        />
      </button>
    </div>
  );
}
