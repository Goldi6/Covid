//====================================================================
///-------------------------Functions-------------------------
//====================================================================

//--------------Time----------------

import {
  FilterType,
  FiltersType,
  TimeFilterType,
  timeFilterValueType,
} from "../../../types/typesToApi";
import { fieldFiltersDictionary } from "../../../dictionary/filters";
import { timeFilterDictionary } from '../../../dictionary/filters';

export function extractTimeFromQueryString(
  queryString: string
): timeFilterValueType {
  const regex = /time=(oneMo|threeMo|sixMo|oneYr|all)/;
  const match = queryString.match(regex);
  const res = match ? match[1] : "all";
  return res as timeFilterValueType;
}

//--------------------Check--------------------
export function extractCheckedValuesFromQueryString(
  queryString: string,
  availableValues: string[],
  filterName: string
): string[] {
  // const regex = /check_=(\w+)/g;
  const regex = new RegExp("check_" + filterName + "=(\\w+)", "g");
  const matches = queryString.matchAll(regex);

  const fieldCheckValues: string[] = [];
  for (const match of matches) {
    if (availableValues.includes(match[1])) fieldCheckValues.push(match[1]);
  }
  // if no values specified, check all
  if (fieldCheckValues.length === 0) return availableValues;
  else return fieldCheckValues;
}

export function extractCheckedValuesForSearchableFilter(
  queryString: string,
  availableValues: string[],
  filterName: string
): string[] {
  // const regex = /check_=(\w+)/g;
  const regex = new RegExp("check_" + filterName + "=([^&]+)", "g");
  const matches = queryString.matchAll(regex);

  const fieldCheckValues: string[] = [];
  for (const match of matches) {
    if (availableValues.includes(match[1])) fieldCheckValues.push(match[1]);
  }
  return fieldCheckValues;
}
//----Radio------
export function extractRadioFromQueryString(
  queryString: string,
  filterName: string
) {
  // const regex = /fieldRadio=(\w+)/g;
  const regex = new RegExp("radio_" + filterName + "=(\\w+)", "g");

  const match = queryString.match(regex);

  return match ? match[1] : "";
}


export function extractFilterText(queryString: string, filter: FilterType | TimeFilterType){



  if (filter.name === "time") {
    return timeFilterDictionary[extractTimeFromQueryString(queryString)];
  } else if (filter.type === "check") {
    if (filter.searchField) {
  
      return extractCheckedValuesForSearchableFilter(
        queryString,
        filter.values,
        filter.name
      ).length +" " +  (filter.helpText?filter.helpText:'');
    } else
      return extractCheckedValuesFromQueryString(
        queryString,
        filter.values,
        filter.name
      ).map(v=>fieldFiltersDictionary.get(v)).join(", ");
  } else if (filter.type === "radio") {
    return extractRadioFromQueryString(queryString, filter.name);
  }
}

export function extractAllFilters(queryString: string, filters: FiltersType) {
  type FilterName = (typeof filters)[number]["name"];

  type TempFilterType = Record<FilterName, string | string[]>;

  const res: TempFilterType = {};
  //-----------------------------------

  for (const filter of filters) {
    if (filter.name === "time") {
      res[filter.name] = extractTimeFromQueryString(queryString);
    } else if (filter.type === "check") {
      if (filter.searchField) {
        res[filter.name] = extractCheckedValuesForSearchableFilter(
          queryString,
          filter.values,
          filter.name
        );
      } else
        res[filter.name] = extractCheckedValuesFromQueryString(
          queryString,
          filter.values,
          filter.name
        );
    } else if (filter.type === "radio") {
      res[filter.name] = extractRadioFromQueryString(queryString, filter.name);
    }
  }
  return res;
}
