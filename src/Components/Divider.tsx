import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  direction: 'vertical' | 'horizontal'
}

const DividerWrap = styled.span<DividerProps>`
  width: ${props => props.direction === 'vertical' ? '0px' : '46px'};
  height: ${props => props.direction === 'vertical' ? '46px' : '1px'};
`

const VerticalDividerStyle = styled.span`
  position: absolute;
  width: 46px;
  left: calc(50% - 46px/2 + 23px);
  top: 0%;
  bottom: 100%;
  border: 1px solid #e5e5e5;
  transform: rotate(90deg);
`

const HorizontalDividerStyle = styled.span`
  position: absolute;
  height: 0px;
  left: 0%;
  right: 0%;
  top: calc(50% - 0px/2 + 0.5px);
  border: 1px solid #e5e5e5;
`

export const Divider = (props: DividerProps) => {
  return (
    <DividerWrap direction={props.direction}>
      {props.direction === 'vertical' 
      ?<VerticalDividerStyle />
      :<HorizontalDividerStyle />}
    </DividerWrap>
  )
}