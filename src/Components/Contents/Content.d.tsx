import styled from "styled-components";

type ContentContainerProps = {
  gap?: string;
  width: string;
}

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  gap: ${props => props.gap};
  width: ${props => props.width};
`

type ImageWrapProps = {
  src?: string;
  width: string;
  height: string;
  radius?: string;
}

export const ImageWrap = styled.div<ImageWrapProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.src ? '#fff' : props.theme.color.gray};
  border-radius: ${props => props.radius ? props.radius : '12px'};
`

type ContentWrapProps = {
  height?: string;
  gap?: string;
}

export const ContentWrap = styled.div<ContentWrapProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: ${props => props.height};
  gap: ${props => props.gap};
`