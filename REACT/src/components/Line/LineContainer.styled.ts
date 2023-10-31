import styled from "styled-components";

export const LineContainer = styled.div`
  h4 {
    margin: 5px;
  }

  padding: 0 16px 16px;
 
`;

export const FlexLineStyled = styled.div`
  display: flex;
  align-items: center;
  span.data {
    margin: 0 0 0 5px;
  }
  margin:0 0  -8px;
  padding: 0;
 
  &.line-flex{

    span.data {
        order:2;
    }
    span.title {
        order:1;
        min-width: 55px;
    }
  }
  &.line-end{
    span.data {
        order:3;
        min-width: 55px;
    }
    span.title {
        order:2;
        min-width: 55px;
    }
  }
`;

export const BallStyled = styled.span`

margin: 0 0 0 8px;
border-radius: 50%;
width: 9px;
height: 9px;
`;
