import { SetStateAction, useState } from "react";
import { ChoiceContainer } from "../Filter.styled";

interface RadioFilterProps {
  defaultValue: string;
  name: string;
  options: string[];
  title: string;
  setParams : React.Dispatch<SetStateAction<Record<string, string | string[]>>>
}

const TimeFilter =   ({ name, title, options, defaultValue ,setParams}:RadioFilterProps) => {
    /////////////////////////////////////////

    const [value, setValue] = useState<string>(defaultValue);

    ////////////////////////////////////////////////////////




    //=============================================
    function onChangeRadioFilter(e: React.ChangeEvent<HTMLInputElement>) {
      const newVal: string = e.target.value ;

      if (newVal !== value) {
        setValue(() => newVal);
        
      }
      setParams((curr)=>{return {...curr, [name]: newVal}});
    }

    return (
      <ChoiceContainer>
        <h4>{title}</h4>
        {options.map((v, key) => (
          <label htmlFor={v} key={key}>
            <input
              type="radio"
              id={v}
              name={`radio_${name}`}
              value={v}
              checked={v === value}
              onChange={onChangeRadioFilter}
            />
            <span>{value}</span>
          </label>
        ))}
      </ChoiceContainer>
    );
  }


export default TimeFilter;
