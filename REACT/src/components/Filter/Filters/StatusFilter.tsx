import { ChoiceContainer } from "../Filter.styled";
export type statusFilterType = "mild" | "moderate" | "severe";

type statusFilterProps = {
  stateFilterValue: Set<statusFilterType>;
  onChangeStatusFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function StatusFilter({
  stateFilterValue,
  onChangeStatusFilter,
}: statusFilterProps) {
  return (
    <ChoiceContainer>
      <h4>מצב מאושפזים</h4>
      <label>
        <input
          type="checkbox"
          name="severe"
          value="severe"
          checked={stateFilterValue.has("severe")}
          onChange={onChangeStatusFilter}
        />
        <span>קשה</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="moderate"
          value="moderate"
          checked={stateFilterValue.has("moderate")}
          onChange={onChangeStatusFilter}
        />
        <span>בינוני</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="mild"
          value="mild"
          checked={stateFilterValue.has("mild")}
          onChange={onChangeStatusFilter}
        />
        <span>קל</span>
      </label>
    </ChoiceContainer>
  );
}
