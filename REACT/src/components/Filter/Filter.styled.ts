import styled from "styled-components";
import { fontSchema } from "../../assets/styleSchema";

export const FilterPanel = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: absolute;
  background: ${(props) => props.theme.filter.panel.background};
  font-size: ${fontSchema.filter.fontSize};
  border: ${(props) => props.theme.filter.border};
`;
// export const FilterBlock = styled.div``;
export const ButtonsPanel = styled.div`
  width: 100%;
  display: flex;
  height: 2rem;
  button {
    font-size: ${fontSchema.filter.panel.buttonFontSize};
    background: ${(props) => props.theme.filter.panel.button.background};
    color: inherit;
    width: 50%;
    &:hover { 

      background: ${(props) => props.theme.filter.panel.button.background};
    }
  }
  
`;
export const FiltersContainer = styled.div`
  max-height: 250px;
  overflow: auto;
  padding-inline-end: 1rem;
  padding-inline-start: 1rem;
  padding-bottom: 10px;
  hr {
    border: 1px solid #2333;
  }
`;

export const OpenFilterButton = styled.button`
  color: inherit;
  border-radius: 16px;
  background-color: ${(props) => props.theme.filter.button.background};
  border: ${(props) => props.theme.filter.button.border};
  padding: 4px 12px;
  margin: 6px 0;
  &:hover {
    background-color: ${(props) => props.theme.filter.button.background};
  }
  img {
    transition: transform 0.5s;
    &.open {
      transform: rotate(180deg);
    }
  }
  span {
    margin: 0 0 0 6px;
  }
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin: 3px 3px 3px 4px;
  }
  input[type='search'] {
    padding: 4px 8px;
  }
  label {
    cursor: pointer;
    padding-bottom: 8px;
    width: 126px;
  }
  h4 {
    margin-top: 12px;
    margin-bottom: 4px;
  }
`;
