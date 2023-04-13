import React from 'react';
import styled from 'styled-components';

type ImageProps = {
  alt: string;
  src?: string;
  height: string;
  radius?: string;
}

const ImageStyle = styled.img.attrs<ImageProps>(props => {
  alt: props.alt || 'isNotAlt';
  src: props.src || 'isNotSrc';
})<ImageProps>`
  height: ${props => props.height};
  width: auto;
  border-radius: ${props => props.radius ? props.radius : null};
`

export const Image = (props: ImageProps) => {
  return (
    <ImageStyle {...props}></ImageStyle>
  )
}