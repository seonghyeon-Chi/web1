import React from 'react';
import styled from 'styled-components';

type TypoProps = {
  fSize: string;
  fWeight: string;
  fColor?: string;
  lHeight: string;
  opacity?: string;
  children?: string | never[];
}

const TypoStyle = styled.span<TypoProps>`
  font-size: ${props => props.fSize};
  font-weight: ${props => props.fWeight};
  line-height: ${props => props.lHeight};
  color: ${props => props.fColor};
  opacity: ${props => props.opacity};
`

export const Typo = (props: TypoProps) => {
  return (
    <TypoStyle {...props}>
      {props.children}
    </TypoStyle>
  )
}