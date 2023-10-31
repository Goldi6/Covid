import styled from "styled-components";

export const Circle = styled.span`
  vertical-align: middle;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-inline-end: 4px;
`;


export const Square = styled.span`

vertical-align: middle;
  width: 20px;
  height: 21px;
  border-radius: 3px;
  display: inline-block;
  margin-inline-end: 4px;

`;

export const Flex = styled.div`
  display: flex;
  gap: 25px;
  font-size: 0.8rem;
  div {
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    .color-label-container{
      display: flex ;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      margin: 0;
      .sub-text{
        color:#999;
        font-size: 0.6rem;
        margin-top: -4px;
      }
    }
  }
`;
