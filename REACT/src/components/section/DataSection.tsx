import { sectionCaseType, sectionType } from "../../types/typesToApi";
import {
  ContentBlockStyled,
  Section,
  SectionBodyStyled,
  SectionHeader,
} from "./Section.styled";
import CardsBlock from "../card/CardsBlock";
import RelatedLinks from "./RelatedLinks/RelatedLinks";

type sectionProps = {
  section: sectionType;
  sectionRef: React.RefObject<HTMLElement> | undefined;
};


function sortCases(a:sectionCaseType,b:sectionCaseType) {
        //order cards by card.order
return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
              
    
}

export default function DataSection({ section, sectionRef }: sectionProps) {
  // console.log("SECT",section)
  return (
    <Section id={section.name} ref={sectionRef}>
      <SectionHeader>
        <h2>{section.title}</h2>
        {section.relatedLinks && section.relatedLinks.length>0 && (
          <RelatedLinks relatedLinks={section.relatedLinks} />
        )}
      </SectionHeader>
      <SectionBodyStyled className="section-body">
        <ContentBlockStyled>
          {section.cases && (
            <CardsBlock
              cards={section.cases.sort(sortCases)}
              gridClass={section.casesGridClass }
              sectionName={section.name}
            />
          )}
        </ContentBlockStyled>
        {/* ////////////////////// */}
        {(section.subTitle || (section.subGroupCases && section.subGroupCases.length>0)) && (
          <ContentBlockStyled className="solid">
            {section.subTitle ? <h3>{section.subTitle}</h3> : ""}
            {section.subGroupCases && (
              <CardsBlock
                cards={section.subGroupCases.sort(sortCases)}
                sectionName={section.name}

                gridClass={
                  section.subCasesGridClass 
                }
              />
            )}
          </ContentBlockStyled>
        )}
      </SectionBodyStyled>
    </Section>
  );
}
