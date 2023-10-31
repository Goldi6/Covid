import { sectionCaseType } from "../../types/typesToApi";
import CardContextProvider from "../../context/CardContext";
import { GridCardBlock } from "../section/Section.styled";
import DataCard from "./DataCard";

export type cardProps = {
  cards: sectionCaseType[];
  gridClass: string;
  sectionName: string;
};
export default function CardsBlock({
          sectionName,
        cards,
  gridClass
}: cardProps) {




  return (
    <GridCardBlock className={gridClass}>


      
      {cards.map((card) => {
        return (
          <CardContextProvider
          key={card.name}
            name={card.name}
            section={sectionName}
            defaultApiParams={card.defaultApiParams}
          >
            <DataCard key={card.name} />
          </CardContextProvider>
        );
      })}
    </GridCardBlock>
  );
}
