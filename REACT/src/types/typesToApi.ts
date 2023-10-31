export type RelatedLink = {
    title: string;
    href: string;
    subTitle?: string;
    subLinkText?: string;
  };
  

  export type relatedLinkType = {
    title: string;
    subTitle?: string;
    href: string;
    subLinkText?: string;
  };

  export type sectionType = {
    order?: number;
    name: string;
    title: string;
    subTitle?: string;
    cases?:sectionCaseType[] | [];
    subGroupCases?:sectionCaseType[] | [];
    relatedLinks?: RelatedLink[];
    casesGridClass: "dataCard" | "subDataCard" | "";
    subCasesGridClass: "dataCard" | "subDataCard" | "";
  }

  
  export type sectionsType = sectionType[] | [];

  ///////////////////////////////!SECTION///////////////////////////////

  export type sectionCaseType = {
    name:string,
    defaultApiParams?:string,
    order:number,
};

export type cardBodyType = 'line'|'table'|'graph';


export type filterType = 'time' | 'fieldCheck' | 'fieldRadio';

export type timeFilterValueType = 'oneMo' | 'threeMo' | 'sixMo' | 'oneYr'|'all';
export  type fieldFiltersValuesType = {

  fieldCheckFilter? : string[]
  fieldRadioFilter? : string[]
  fieldCheckKey?:string
  }

  export type colorHelpersType = {
    name: string;
    light: string;
    dark: string;
    text: string;
    min?: number;
    max?: number;
    subText?: string;
  };

  export type FilterType = {
    name: string;
    type: 'check'|'radio';
    values: string[];
    key: string;
    title: string;
    useDictionary?: boolean;
    show?:'count'|'selection';
    searchField?:boolean;
    helpText?:string;
  }


  export type TimeFilterType = {
    name: 'time';
    type: 'radio';
    filter: {
      year: number;
      sixMo: number;
      threeMo: number;
      oneMo: number;
    };
  };

 export type FiltersType = [TimeFilterType | FilterType];
 
 export type placeholderCardType = {
  name:string,
  title:string,
 }
export type cardType = {
  name:string,
  shareable:boolean,
  title:string,
  tooltip:string,
  type:cardBodyType;
  defaultApiParams?: string;
  filters:FiltersType;
class?:string;
  body:any;
  colorHelpers:colorHelpersType[];
}

export type  tableRowType={
  [key: string]: string 
}[];

export type tableType = {
  data: {
    labels: { name: string; title: string ,progress?:boolean , percent?:boolean,useColor?:boolean , colorByValue?:boolean}[];
    rows:tableRowType;
  };
}
////////////////////////////////////////////!SECTION
//////////////////////////////!SECTION
//////////////////////////////////!SECTION
