import styled from "styled-components";

export const Panel = styled.div`
  background-color: ${(props) => props.theme.card.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  width: min-content;
  position: absolute;
  top: 30px;
  z-index: 5;
  box-shadow: ${(props) => props.theme.tooltip.boxShadow};
`;

export const Button = styled.button`
  color: inherit;
  border-radius: 16px;
  background-color: ${(props) => props.theme.card.background};
  border: ${(props) => props.theme.section.button.border};
  padding: 4px 12px;
  span {
    margin: 0 0 0 6px;
  }
`;
export const PanelLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: inherit;
  min-width: 350px;
  cursor: pointer;
  padding: 8px;

  div {
    margin: 0 10px 0 0;
    strong: {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
    span {
      font-size: 12px;
      text-decoration: underline;
      color: ${(props) => props.theme.section.smallLinkColor};
    }
  }
`;
