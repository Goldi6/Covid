import styled from "styled-components";

export const Scrollable = styled.div`
    overflow: scroll;
  max-height: 250px;
  min-height: 250px;
  `
export const TableStyled = styled.table`
  width: 100%;
  th,
  td {
    padding: 8px;
    font-weight: bold;
  }
position: relative;
`;

export const THeadStyled = styled.thead`
  background: ${(props) => props.theme.filter.panel.button.background};
  position: sticky;
  top: 0;
  z-index: 2;
`;
export const TbodyStyled = styled.tbody`
position: relative;
 overflow-y: scroll;
    max-height: 250px !important;
    
  tr {
    
      td {
        span {
          display: flex;
          align-items: center;
          justify-content: center;
        }
    
        border-bottom: solid #eee 1px;
        progress {
          /* Reset the default appearance */
          -webkit-appearance: none;
          appearance: none;
          background-color: ${(props) => props.theme.filter.button.background};
          width: 50px;
          margin: 5px;
        }
        progress::-webkit-progress-bar {
          background-color: #f0f0f0;
          border-radius: 1px;
        }
        
        progress::-webkit-progress-value {
          background-color: rgb(44, 210, 219);
          border-radius: 1px;
        
        }
        progress.heigh-value::-webkit-progress-value{
            background-color: rgb(235, 94, 94);

          }
      }
      td:first-of-type {
        span {
          justify-content: flex-start;
        }
      }
      .colored-data{

        width:20px;
        height:100%;
        border-radius: 1px;

      }
    }
`;



export const ColorSquareStyled = styled.div`
width: 15px;
height: 10px;
border-radius: 2px;
`