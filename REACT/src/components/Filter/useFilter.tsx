import { useContext, useState } from "react";
import {
  FilterType,
  FiltersType,
  timeFilterValueType,
} from "../../types/typesToApi";

import useDisplayToggle from "../../hooks/displayHook";
import { ThemeContext } from "../../context/ThemeContext";
import {
  extractAllFilters,
  extractFilterText,
  extractRadioFromQueryString,
} from "./funcs/extractFromQueryString";
import {
  ButtonsPanel,
  FilterPanel,
  FiltersContainer,
  OpenFilterButton,
} from "./Filter.styled";
import TimeFilter from "./Filters/TimeFilter";
import arrowSVGdark from "../../assets/arrowDark.svg";
import arrowSVGlight from "../../assets/arrowLight.svg";
import CheckFilter from "./Filters/checkFilter";
import RadioFilter from "./Filters/RadioFilter";
import CheckSearchFilter from "./Filters/CheckSearchFilter";

export interface FilterRef {
  cancel: () => void;
  set: () => void;
  currentValue: timeFilterValueType | string | string[];
  createParams: () => string;
}

//====================================================================
//====================================================================

export default function useFilter(
  apiParams: string,
  setApiParams: React.Dispatch<React.SetStateAction<string>>,
  filters: FiltersType,
  defaultApiParams: string
) {
  //////////////////////////////
  type TempFilterType = Record<FilterName, string | string[]>;
  type FilterName = (typeof filters)[number]["name"];

  const themeContext = useContext(ThemeContext);
  const { isDisplayed, func, classN } = useDisplayToggle("flex", true);

  //------START-------
  const [currentParams, setCurrentParams] = useState<TempFilterType>(
    extractAllFilters(apiParams, filters)
  );
  const [tempParams, setTempParams] = useState<TempFilterType>(currentParams);

  //----------------------------------Filter Button clicks----------------------------------

  function onClickCancel() {
    setTempParams(() => currentParams);
    func.close();
  }

  function onClickSet() {
    const newParams = filters.map((f) => {
      if (f.name === "time") return `time=${tempParams["time"]}`;
      if (
        f.type === "check" &&
        tempParams[f.name] &&
        Array.isArray(tempParams[f.name])
      ) {
        const arr = tempParams[f.name] as string[];
        return arr.map((val: string) => `check_${f.name}=${val}`).join("&");
      } else {
        return tempParams[f.name] && `radio_${f.name}=${tempParams[f.name]}`;
      }
    });
    setCurrentParams(() => tempParams);
    setApiParams(() => newParams.join("&"));
    func.close();
  }

  //=========================Create and Update API Params=========================

  //====================================================================
  //----------Component to return----------------
  return (
    <div style={{ position: "relative" }}>
      <OpenFilterButton onClick={func.toggle}>
        {/* //------selected values to show */}
        <span>
          {filters.map((f) => {
            return <span key={f.name}>{extractFilterText(apiParams, f)}</span>;
          })}
        </span>

        <img
          src={themeContext?.theme === "light" ? arrowSVGdark : arrowSVGlight}
          alt=""
          className={classN}
        />
      </OpenFilterButton>
      {isDisplayed && (
        <FilterPanel>
          <form action="">
            <FiltersContainer>
              {tempParams["time"] && (
                <TimeFilter
                  defaultTime={tempParams["time"] as timeFilterValueType}
                  setFilter={setTempParams}
                />
              )}
              {filters.map((item) => {
                const key = item.name;
                const temp = tempParams[key] as string[];
                if (!temp) return null;
                if (item.type === "check") {
                  const isSearchList = item.searchField ? true : false;
                  if (isSearchList)
                    return (
                      <CheckSearchFilter
                        key={item.name}
                        name={item.name}
                        title={item.title}
                        options={item.values}
                        defaultValue={temp}
                        setParams={setTempParams}
                      />
                    );
                  else
                    return (
                      <CheckFilter
                        key={item.name}
                        name={item.name}
                        title={item.title}
                        options={item.values}
                        defaultValue={temp}
                        setParams={setTempParams}
                      />
                    );
                } else {
                  if (item.name === "time") return null;
                  const fil = item as FilterType;

                  return (
                    <RadioFilter
                      key={fil.name}
                      name={fil.name}
                      title={fil.title}
                      options={fil.values}
                      defaultValue={extractRadioFromQueryString(
                        apiParams,
                        fil.name
                      )}
                      setParams={setTempParams}
                    />
                  );
                }
              })}
            </FiltersContainer>
          </form>
          <ButtonsPanel>
            <button onClick={onClickSet}>אישוור</button>
            <button onClick={onClickCancel}>ביטול</button>
          </ButtonsPanel>
        </FilterPanel>
      )}
    </div>
  );
}
