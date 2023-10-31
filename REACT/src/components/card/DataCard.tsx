import { useContext } from "react";
import { CardStyled } from "./card.styled";
import {CardContext} from "../../context/CardContext";
import CardHeader from "./inner/CardHeader";
import CardBody from "./inner/CardBody";
import { cardType } from "../../types/typesToApi";

function isCardType(obj: any): obj is cardType {
  return (obj as cardType).type !== undefined; 
}

export default function DataCard() {
  const card = useContext(CardContext);
  if (!card) return null;
  if (card.cardData==null) {return null;}
if(!card.setApiParams) {return null;}
    const {cardData} = card;

// console.log("DATA",data)

    if(isCardType(cardData) ){
      cardData as cardType
      return (
     
          <CardStyled className={cardData.class ? cardData.class:''}>
            {cardData.title && <CardHeader />}
           { cardData.body && cardData.type && (<CardBody cardBody={cardData.body} type={cardData.type} colorHelpers = {cardData.colorHelpers}/>)}
            
          </CardStyled>
      )
    }
      else return ( <CardStyled >
      <div className='placeholder'>Chart Placeholder</div>
    </CardStyled>);


}
