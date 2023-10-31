import { useContext } from "react";
import { colorHelpersType } from "../../types/typesToApi";
import { Circle, Flex, Square } from "./GraphHelperTags.styled";
import {ThemeContext} from "../../context/ThemeContext";
import { colors,isRGBColor,ColorName } from "../../assets/colors";

type props = {
  helpers: colorHelpersType[];
  type: string;
};

export default function GraphHelpTags({ helpers,type }: props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme;
  return (
    <Flex>
      {helpers.map((helper, i) => {
      let color = theme==='light'? helper.light:helper.dark;
      color = isRGBColor(color) ? color : colors[color as ColorName];
        return (
          <div key={i}>
            {type==='graph' &&<Circle style={{ backgroundColor:color }}></Circle>}
            {type==='table' && <Square style={{ backgroundColor:color}}></Square>}
            <div className="color-label-container" ><span>{helper.text}</span>{helper.subText && <span className='sub-text'>{helper.subText}</span>}</div>
          </div>
        );
      })}
    </Flex>
  );
}
