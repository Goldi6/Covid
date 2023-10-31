import { fieldFiltersDictionary } from "../../../dictionary/filters";
import { ChoiceContainer } from "../Filter.styled";

type FieldCheckFilterProps = {
  availableValues: string[];
  setFieldCheckFilter: React.Dispatch<React.SetStateAction<Set<string>>>;
  fieldCheckFilterValues: Set<string>;
  fieldCheckTitle?: string;
};



export default function FieldCheckFilter({
  availableValues,
  setFieldCheckFilter,
  fieldCheckFilterValues,
}: FieldCheckFilterProps) {

  function onChangeSetValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const newValues = new Set(fieldCheckFilterValues);

    if (newValues.has(value)) {
      newValues.delete(value);
    } else {
      newValues.add(value);
    }

    setFieldCheckFilter(()=>newValues);
  }
console.log(availableValues)
  return (
    <ChoiceContainer>
      <h4>מצב מאושפזים</h4>
      {availableValues.map((value,key) => (
        <label key={key}>
          <input
            type="checkbox"
            name={value}
            value={value}
            checked={fieldCheckFilterValues.has(value)}
            onChange={onChangeSetValue}
          />
          <span>{fieldFiltersDictionary.get(value)?fieldFiltersDictionary.get(value):value}</span>
        </label>
      ))}
    </ChoiceContainer>
  );
}
