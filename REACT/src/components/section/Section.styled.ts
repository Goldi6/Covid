import styled from "styled-components";
import { positionSchema } from "../../assets/styleSchema";

export const Section = styled.section`
  padding: 15px 0;
  margin: 0 20px;
  border-top: 1px solid rgba(199, 199, 199, 0.4470588235);
  min-height: ${positionSchema.sectionMinHeight};
  &:first-of-type {
    border-top: none;
  }
`;
export const SectionHeader = styled.div`
  h2 {
    margin-left: 16px;
    font-size: 19px;
    display: inline-block;
  }
`;
export const SectionBodyStyled = styled.div`
  margin: 16px 0;

  h3 {
    font-size: 16px;
    margin: 10px;
  }
`;

export const ContentBlockStyled = styled.div`
  &.solid {
    background-color: ${(props) => props.theme.card.background};
    border-radius: 10px;
    box-shadow: 3px 6px 14px #0000001a;
    padding: 2px 20px;
    margin: 0 10px;
  }
`;


export const GridCardBlock = styled.div`
  display: grid;
  padding: 8px 0 0;

  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: ${positionSchema.sectionBreakpoint_big}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: ${positionSchema.sectionBreakpoint_small}) {
    grid-template-columns: 1fr ;
  }

  &.data-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    @media screen and (max-width: ${positionSchema.sectionBreakpoint_big}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-width: ${positionSchema.sectionBreakpoint_small}) {
      grid-template-columns: 1fr 1fr;
    }
  }
  &.sub-data-card {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media screen and (max-width: ${positionSchema.sectionBreakpoint_big}) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: ${positionSchema.sectionBreakpoint_small}) {
      grid-template-columns: 1fr;
    }
  }
`;
