import styled from "styled-components";
import { positionSchema } from "../../assets/styleSchema";

export const CardStyled = styled.div`
  box-shadow: 0 3px 15px -2px #00020233;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
  font-size: 0.74rem;
  background-color: ${(props) => props.theme.card.background};
  border: ${(props) => props.theme.card.border};
  min-height: 185px;

  &.span_2{

    grid-column: span 2;
  }

  div.card-header {
    padding: 16px 16px 0 16px;
  }
  div.card-body {
    padding: 0 16px 16px 16px;
  }
  div.placeholder{
    height: 344px;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
  font-weight: bold;
  
  line-height: 1.5;
 opacity: 0.25;
  }
`;
export const CardFlexHeader = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;
export const CardTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.5;
  display: inline-block;
`;

export const BigNum = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
export const MediumNum = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;
export const Tooltip = styled.div`
  font-size: 0.8rem;
`;

