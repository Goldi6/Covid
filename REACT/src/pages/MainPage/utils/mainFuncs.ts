import {  sectionsType } from "../../../types/typesToApi";
import { navButton } from "../../../components/nav/types";

export function getSectionsNav(sections: sectionsType): navButton[] {
  let navList: navButton[] = sections.map((el) => {
    return { title: el.title ,id:el.name};
  });

  return navList;
}
