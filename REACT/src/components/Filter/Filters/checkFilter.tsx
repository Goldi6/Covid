import { useEffect, useState } from "react";
import { ChoiceContainer } from "../Filter.styled";
import { fieldFiltersDictionary } from "../../../dictionary/filters";

interface CheckFilterProps {
  defaultValue: string[];
  name: string;
  options: string[];
  title: string;
  useDictionary?:boolean;
  setParams:React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>
}

const CheckFilter = 
  ({ name, title, options, defaultValue,setParams,useDictionary=true }:CheckFilterProps) => {
    /////////////////////////////////////////
    const [value, setValue] = useState<string[]>(defaultValue);
    ////////////////////////////////////////////////////////



    //=============================================
    function onChangeCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
      const thisCheckbox: string = e.target.value ;

        if (value.includes(thisCheckbox)) {
          setValue((prev) => prev.filter((v) => v !== thisCheckbox));
        }
        else {
          setValue((prev) => [...prev, thisCheckbox]);
        }
  

    }

    useEffect(() => {
    
      setParams((curr)=>{return {...curr, [name]: [...value]}});
    },[name, options.length, setParams, value]);


    return (
<ChoiceContainer>
  <h4>{title}</h4>
  
  {options.map((v, key) => (
    <label htmlFor={v} key={key}>
      <input
        type="checkbox" 
        id={v}
        name={`checkbox_${name}`}  
        value={v}
        checked={value.includes(v)  }
        onChange={onChangeCheckBox}
      />
      <span>{useDictionary ?fieldFiltersDictionary.get(v):v}</span>
    </label>
  ))}
</ChoiceContainer>

    );
  }


export default CheckFilter;
