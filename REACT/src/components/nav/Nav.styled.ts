import styled from "styled-components";

export const StyledLink = styled.li`
  &.active {
    background-color: #fff;
    border-radius: 20px;
    color: #000;
  }
`;

export const Nav = styled.nav`


  position: sticky;
  top: 74px;
  box-shadow: 0 4px 16px #00000040;
  background-color: rgb(55, 79, 96);
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  overflow-x: scroll;
  ul {
    padding: 9px 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: max-content;
    li {
      padding: 6px 20px;
      margin: 0 4px;

      @media screen and (min-width: 1200px) {
        padding: 6px 15px;
      }

      @media screen and (max-width: 480px) {
        padding: 6px 6px;
      }

      &:first-of-type {
        margin-right: 30px;
        @media screen and (max-width: 765px) {
          margin-right: 15px;
        }
        @media screen and (max-width: 480px) {
          margin-right: 5px;
        }
      }
      a {
        color: inherit;
        width: 100%;
        height: 100%;
        &.active {
        }
      }
    }
  }
`;
