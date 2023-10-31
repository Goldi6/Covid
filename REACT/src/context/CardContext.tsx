import { createContext, useEffect, useState } from "react";
import { getAPI } from "../serverFuncs/getAPI";
import { cardType, placeholderCardType } from "../types/typesToApi";

export type cardContextValueType = {
setApiParams:React.Dispatch<React.SetStateAction<string >>;
  cardData: cardType | null | placeholderCardType;
  apiParams:string
};






export type contextProviderProps = {
  children: React.ReactNode;
name:string,section:string,  defaultApiParams: string | undefined;
};

export const CardContext = createContext<cardContextValueType | null>(null);

export default function CardContextProvider({
  children,
  name,section,
  defaultApiParams,
}: contextProviderProps) {
  
  
  const [cardData, setData] = useState<cardType | null>(null);
  

  
  const [apiParams,setApiParams] =useState(defaultApiParams? defaultApiParams:""); 

  useEffect(() => {
    let isComponentMounted = true;

    async function fetchData() {
      try {
        

        // console.log(section,name, apiParams)
        const res:cardType = await getAPI(section,name, apiParams) as cardType;
        //console.log(res)
        if (isComponentMounted) {
          setData(()=>res);
        
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    return () => {
      isComponentMounted = false;
    };
  }, [apiParams,section,name]);
 // console.log(api);

  return (
    <CardContext.Provider value={{  cardData, setApiParams,apiParams }}>
      {children}
    </CardContext.Provider>
  );
}
