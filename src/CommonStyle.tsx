import styled from "styled-components";

type CommonProps = {
  size?: string;
  width?: string;
  height?: string;
}

export const MrContainer = styled.span<CommonProps>`
  margin-right: ${props => props.size};
  width: ${props => props.width};
  height: ${props => props.height};
`

export const MlContainer = styled.span<CommonProps>`
  margin-left: ${props => props.size};
  width: ${props => props.width};
  height: ${props => props.height};
`