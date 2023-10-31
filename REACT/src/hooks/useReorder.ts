import { useEffect, useState } from "react";
import { tableRowType } from "../types/typesToApi";

export const useReorder = (dataArr: tableRowType) => {
    const [orderedData, setOrderedData] = useState<tableRowType>(dataArr);

    useEffect(() => {
        // Update orderedData when dataArr changes
        setOrderedData(dataArr);
      }, [dataArr]);
  
    const reorderBy = (key: string) => {
      const ordered = [...orderedData]; // Create a new array to avoid direct mutation
      ordered.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
  
      setOrderedData(ordered);
    };
  
    return { orderedData, reorderBy };
  };
  