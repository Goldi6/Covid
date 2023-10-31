import styled from "styled-components";

export const SharePanel = styled.div`
  width: min-content;
  flex-direction: column;
  position: absolute;
  top: 24px;
  left: 0;
  z-index: 100;
`;

export const SharePanelButton = styled.button`
  padding: 12px 8px;
  border: 1px solid ${(props) => props.theme.card.shareBorderColor};
  display: flex;
  background-color: ${(props) => props.theme.card.background};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: inherit;
  &:hover {
    background-color: ${(props) => props.theme.card.shareHoverBG};
  }

  .circle {
    width: 25px;
    height: 26px;
    padding: 4px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.card.shareBorderColor};
    margin: 0 0 0 8px;
  }
`;
