import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import starFillIcon from '../assets/icon-star-fill.svg'
import starLineIcon from '../assets/icon-star-line.svg'

interface RatingProps {
  rating?: number;
  left?: string;
  top?: string;
}

type RatingStyleProps = {
  left?: string;
  top?: string;
}

const RatingWrap = styled.span<RatingStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.125em;
  position: ${props => props.left || props.top ? 'absolute' : null};
  width: 5.5em;
  height: 1em;
  left: ${props => props.left};
  top: ${props => props.top};
`

export const Rating = (props: RatingProps) => {
  let rating = props.rating ? props.rating : 0;
  let array = new Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    array[i] = true;
  }

  return (
    <RatingWrap left={props.left} top={props.top}>
      {array.map((item, idx) => (
        item ? <Icon key={idx} src={starFillIcon} alt="starFillIcon" width="1em" height="1em" /> 
        : <Icon key={idx} src={starLineIcon} alt="starLineIcon" width="1em" height="1em" />
      ))}
    </RatingWrap>
  )
}