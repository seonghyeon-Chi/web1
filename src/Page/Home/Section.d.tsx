import styled from "styled-components";

interface SectionContainerProps {
  first?: boolean;
}

export const SectionContainer = styled.div<SectionContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.first ? '120px 0px' : '0px 0px 120px'};
  gap: 10px;
`

interface SectionWrapProps {
  height: string;
  fourth?: boolean;
}

export const SectionWrap = styled.div<SectionWrapProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${props => props.fourth ? '1128px' : '1360px'};
  height: ${props => props.height};
`

export const SectionContentWrap = styled.div<SectionWrapProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  height: ${props => props.height};
`