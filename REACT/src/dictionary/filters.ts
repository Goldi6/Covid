import { timeFilterValueType } from "../types/typesToApi";


export const timeFilterDictionary: Record<timeFilterValueType, string> = {
    oneMo: 'חודש אחרון',
    threeMo: '3 חודשים',
    sixMo: '6 חודשים',
    oneYr: 'שנה',
    all: 'עד עכשיו',
  };




  export const fieldFiltersDictionary = new Map();


fieldFiltersDictionary.set('Illness level',"מצב מאושפזים");
fieldFiltersDictionary.set('Mild',"קל");
fieldFiltersDictionary.set('Moderate',"בינוני");
fieldFiltersDictionary.set('Severe',"קשה");