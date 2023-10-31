import styled from "styled-components";
import { positionSchema } from "../../assets/styleSchema";

export const MainBlock = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};

  color: ${(props) => props.theme.text};
  *{


    &::-webkit-scrollbar {
    height: 0.5em;
    width: 0.5em;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 1em;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
    border-radius: 1em;
  }
  }
`;

export const MainContainer = styled.div`
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  
  overflow: auto;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  section{

    /* max-width: ${positionSchema.maxMainWidth}; */
   max-width: 1880px;
    margin: auto;
  }





`;
