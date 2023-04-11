import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import starFillIcon from '../assets/icon-star-fill.svg'
import starLineIcon from '../assets/icon-star-line.svg'

interface RatingProps {
  rating: number;
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
  gap: 2px;
  position: ${props => props.left || props.top ? 'absolute' : null};
  width: 88px;
  height: 16px;
  left: ${props => props.left};
  top: ${props => props.top};
`

export const Rating = (props: RatingProps) => {
  let rating = props.rating;
  let array = new Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    array[i] = true;
  }

  return (
    <RatingWrap left={props.left} top={props.top}>
      {array.map((item, idx) => (
        item ? <Icon src={starFillIcon} alt="starFillIcon" width="16px" height="16px" /> 
        : <Icon src={starLineIcon} alt="starLineIcon" width="16px" height="16px" />
      ))}
    </RatingWrap>
  )
}