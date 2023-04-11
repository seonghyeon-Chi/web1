import React from 'react';
import styled from 'styled-components';

type IconProps = {
  alt: string;
  src: string;
  width: string;
  height: string;
}

const IconStyle = styled.img.attrs<IconProps>(props => {
  alt: props.alt || 'isNotAlt';
  src: props.src || 'isNotSrc';
})`
  width: ${props => props.width};
  height: ${props => props.height};
`

export const Icon = (props: IconProps) => {
  return (
    <IconStyle {...props}></IconStyle>
  )
}

