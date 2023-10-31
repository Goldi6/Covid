
import useFilter from "./useFilter";
import { FiltersType } from "../../types/typesToApi";


type paramsType = {



    filters:FiltersType ;
    defaultApiParams: string | undefined;
    apiParams: string ;
    setApiParams: React.Dispatch<React.SetStateAction<string >>;
    //fieldFiltersValues: fieldFiltersValuesType | {};
}


// export default function Filter({apiParams,setApiParams,filters,defaultApiParams="",fieldFiltersValues={}}:paramsType) {
export default function Filter({apiParams,setApiParams,filters,defaultApiParams=""}:paramsType) {



  

    // const FilterComponent = useFilter(apiParams,setApiParams,filters,defaultApiParams,fieldFiltersValues) 
    const FilterComponent = useFilter(apiParams,setApiParams,filters,defaultApiParams) 
 
return FilterComponent
}
