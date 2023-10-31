import { MainBlock } from "./Main.styled";
import SectionNav from "../../components/nav/SectionNav";
import { getSectionsNav } from "./utils/mainFuncs";
import MainDataContainer from "./MainDataContainer";
import { sectionsType } from "../../types/typesToApi";
import { useContext } from "react";
import { SectionsContext } from "../../context/SectionsContext";

export default function Main() {
const cont = useContext(SectionsContext) ;


if(cont===null) return (<div>Loader</div>)
else{

  return (
    <MainBlock>
      <SectionNav navList={getSectionsNav(cont.sections as sectionsType)} />
      <MainDataContainer />
    </MainBlock>
  );
}
}
