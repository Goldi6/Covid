import { MainContainer } from "./Main.styled";
import DataSection from "../../components/section/DataSection";
import { sectionType } from "../../types/typesToApi";
import { LegacyRef, useContext } from "react";
import { SectionsContext } from "../../context/SectionsContext";

export default function MainDataContainer() {
  const sectionsContext = useContext(SectionsContext);
  let height = 0;
  if (sectionsContext?.stickyHeight) {
    height = sectionsContext.stickyHeight;
  }
  return (
    <MainContainer
      id="data-container"
      style={{ paddingTop: height + "px" }}
      ref={sectionsContext?.mainRef as LegacyRef<HTMLDivElement>}
    >
      {sectionsContext?.sections.map((section: sectionType, i) => {
        if (sectionsContext.sectionRefs) {
          return (
            <DataSection
              key={section.name}
              section={section}
              sectionRef={sectionsContext?.sectionRefs[i]}
            />
          );
        } else return <></>;
      })}
    </MainContainer>
  );
}


