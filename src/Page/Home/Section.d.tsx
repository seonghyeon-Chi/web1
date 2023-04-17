import styled from "styled-components";

interface SectionContainerProps {
  first?: boolean;
}

export const SectionContainer = styled.div<SectionContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.first ? '7.5em 0px' : '0px 0px 7.5em'};
  gap: 0.625em;
`

interface SectionWrapProps {
  height: string;
  fourth?: boolean;
}

export const SectionWrap = styled.div<SectionWrapProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${props => props.fourth ? '70.5em' : '85em'};
  height: ${props => props.height};
`

export const SectionContentWrap = styled.div<SectionWrapProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2em;
  height: ${props => props.height};
`