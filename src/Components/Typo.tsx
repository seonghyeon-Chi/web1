import React from 'react';
import styled from 'styled-components';

type TypoProps = {
  fSize: string;
  fWeight: string;
  fColor?: string;
  lHeight: string;
  children?: string | never[];
}

const TypoStyle = styled.span<TypoProps>`
  font-size: ${props => props.fSize};
  font-weight: ${props => props.fWeight};
  line-height: ${props => props.lHeight};
  color: ${props => props.fColor};
`

export const Typo = (props: TypoProps) => {
  return (
    <TypoStyle {...props}>
      {props.children}
    </TypoStyle>
  )
}