import styled from "styled-components";
import { fontSchema } from "../../../../assets/styleSchema";

export const TooltipPanel = styled.div`
  position: absolute;
  background: ${(props) => props.theme.card.background};
  white-space: pre-line;
  padding: 0.5rem;
  font-size: ${fontSchema.tooltip};
  border-radius: 5px;
  border: ${(props) => props.theme.tooltip.border};
  box-shadow: ${(props) => props.theme.tooltip.boxShadow};
  line-height: 1.2;
  left: 0;
  right: 0;
  z-index: 200;
  margin: 0 10%;
`;
