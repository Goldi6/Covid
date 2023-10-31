import { SetStateAction, useState } from "react";
import { timeFilterValueType } from "../../../types/typesToApi";
import { ChoiceContainer } from "../Filter.styled";


interface TimeFilterProps {
  defaultTime: timeFilterValueType;
  setFilter:React.Dispatch<SetStateAction<Record<string, string | string[]>>>
}

const  TimeFilter = ({defaultTime,setFilter}:TimeFilterProps) => {

/////////////////////////////////////////




  const [timeValue, setTimeValue] =
    useState<timeFilterValueType>(defaultTime);

////////////////////////////////////////////////////////



//=============================================
  function onChangeTimeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal: timeFilterValueType = e.target.value as timeFilterValueType;

    if (newVal !== timeValue) {
      setTimeValue(()=>newVal);
      setFilter((curr)=>{return {...curr, time: newVal}});
    }
  }


  return (
    <ChoiceContainer>
      <h4>זמן</h4>
      <label htmlFor="all">
        <input
       type="radio"
       id="all"
       name="timeFilter"
       value="all"
       checked={timeValue === 'all'}
       onChange={onChangeTimeFilter}
        />
        <span>עד עכשיו</span>
      </label>

      <label htmlFor="oneYr"> 
        <input
            type="radio"
            id="oneYr"
            name="timeFilter"
            value="oneYr"
            checked={timeValue === 'oneYr'}
            onChange={onChangeTimeFilter}
        />
        <span>שנה</span>
      </label>

      <label htmlFor="sixMo">
        <input
           type="radio"
           id="sixMo"
           name="timeFilter"
           value="sixMo"
           checked={timeValue === 'sixMo'}
           onChange={onChangeTimeFilter}
        />
        <span>6 חודשים</span>
      </label>

      <label htmlFor="threeMo">
        <input
          type="radio"
          id="threeMo"
          name="timeFilter"
          value="threeMo"
          checked={timeValue === 'threeMo'}
          onChange={onChangeTimeFilter}
        />
        <span>3 חודשים</span>
      </label>

      <label htmlFor="oneMo">
        <input
           type="radio"
           id="oneMo"
           name="timeFilter"
           value="oneMo"
           checked={timeValue === 'oneMo'}
           onChange={onChangeTimeFilter}
        />
        <span >חודש אחרון</span>
      </label>
    </ChoiceContainer>
  );
};


export default TimeFilter;