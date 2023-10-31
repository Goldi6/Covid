import { ColorSquareStyled } from "./Table.styled";

import { colors ,ColorName} from "../../assets/colors";

type props = {color:string};




export default function ColorSquare({color}:props) {

  const colorName = color as ColorName;
  return (
    <ColorSquareStyled style={{backgroundColor:colors[colorName] }}/>
  )
}
