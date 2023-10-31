import { useEffect, useState } from "react";
import { ChoiceContainer } from "../Filter.styled";





interface CheckFilterProps {
    defaultValue: string[];
    name: string;
    options: string[];
    title: string;
    setParams:React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>
  }
  
  const CheckSearchFilter = 
    ({ name, title, options, defaultValue,setParams }:CheckFilterProps) => {
      /////////////////////////////////////////
      const [selectedValues, setSelectedValue] = useState<string[]>(defaultValue);
      ////////////////////////////////////////////////////////

      const [temp,setTemp]=useState<string[]>(options.filter((v)=>{return !defaultValue.includes(v)}));
    //const [allSelected,setAllSelected] = useState(true);
        const[currentlySelected, setCurrentlySelected] = useState<string[]>(defaultValue);
  
      //=============================================
      function onChangeCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
        const thisCheckbox: string = e.target.value ;
  
          if (currentlySelected.includes(thisCheckbox)) {
            setCurrentlySelected((prev) => prev.filter((v) => v !== thisCheckbox));
          }
          else {
            setCurrentlySelected((prev) => [...prev, thisCheckbox]);
          }
    
  
      }
  
      useEffect(() => {
      
        setParams((curr)=>{return {...curr, [name]: [...currentlySelected]}});
      },[name,  setParams, temp, currentlySelected]);
  
  
      return (
  <ChoiceContainer>
    <h4>{title}</h4>
    <input type="text" onChange={(e)=>{setTemp(temp.filter((v)=>{return v.includes(e.target.value) }))}}/>
    {selectedValues.map((v, key) => (
        <label htmlFor={v} key={key}>
            <input
            type="checkbox" 
            id={v}
            name={`checkbox_${name}`}  
            value={v}
            checked={currentlySelected.includes(v)  }
            onChange={onChangeCheckBox}
            />
            <span>{v}</span>
        </label>
        ))} 
<hr/>
        {/* //---------------- */}
        {temp.map((v, key) =>{ 
        
  
        
        return(
      <label htmlFor={v} key={key}>
        <input
          type="checkbox" 
          id={v}
          name={`checkbox_${name}`}  
          value={v}
          checked={currentlySelected.includes(v) }
          onChange={onChangeCheckBox}
        />
        <span>{v}</span>
      </label>
    )})}
  </ChoiceContainer>
  
      );
    }
  
  
  export default CheckSearchFilter;
  