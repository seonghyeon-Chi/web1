import React from "react";
import styled, { useTheme } from "styled-components";
import GlobalContext from '../GlobalContext';
import searchIcon from '../assets/icon-search.svg'
import searchMuteIcon from '../assets/icon-search-mute.svg'
import { Icon } from './Icon';
import { MrContainer, MlContainer } from '../CommonStyle';
import { Typo } from './Typo';

type ButtonProps = {
  size: 'lg' | 'md' | 'sm' | 'xs'
  direction: 'left' | 'right'
  jenre: 'primary' | 'secondary'
  src?: string;
  children?: string | never[];
}

type ButtonStyleProps = {
  fSize: string;
  fWeight: string;
  padding: string;
}

const ButtonWrap = styled.button.attrs(props => {
  type: props.type
})<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding};
  background-color: ${props => props.jenre === 'primary' ? props.theme.color.def : props.theme.color.def_mute};
  color: ${props => props.jenre === 'primary' ? props.theme.color.white : props.theme.color.def};
  border-radius: 12px;
  border: none;

  &&:hover {
    cursor: pointer;
  }
`

export const Button = (props: ButtonProps) => {
  const context = React.useContext(GlobalContext);
  const { size, direction, jenre, children } = props

  const [btnState, setBtnState] = React.useState<ButtonStyleProps>({
    padding: '',
    fSize: '',
    fWeight: '',
  })

  React.useEffect(() => {
    if (props.size === 'lg') {
      setBtnState({
        padding: '1.5em',
        fSize: context.font.fs3,
        fWeight: '500'
      })
    } else if (props.size === 'md') {
      setBtnState({
        padding: '1.125em',
        fSize: context.font.fs3,
        fWeight: '500'
      })
    } else if (props.size === 'sm') {
      setBtnState({
        padding: '0.75em',
        fSize: context.font.fs3,
        fWeight: '400'
      })
    } else if (props.size === 'xs') {
      setBtnState({
        padding: '0.625em',
        fSize: context.font.fs4,
        fWeight: '400'
      })
    }
  }, [size])

  return (
    <>
    {props.direction === 'left'
    ? <ButtonWrap {...btnState} jenre={jenre}>
      <MrContainer size={props.children ? size === 'lg' || size === 'md' ? '0.5em' : '0.25em' : '0px'} width={props.size === 'xs' ? "1,25em" : "1.5em"} height={props.size === 'xs' ? "1.25em" : "1.5em"}>
        {props.jenre === 'primary' ? <Icon src={props.src ? props.src : searchIcon} alt="searchIcon" width={props.size === 'xs' ? "1.25em" : "1.5em"} height={props.size === 'xs' ? "1.25em" : "1.5em"} />
        : <Icon src={props.src ? props.src : searchMuteIcon} alt="searchMuteIcon" width={props.size === 'xs' ? "1.25em" : "1.5em"} height={props.size === 'xs' ? "1.25em" : "1.5em"} />}
      </MrContainer>
      <Typo fSize={btnState.fSize} fWeight={btnState.fWeight} lHeight={btnState.fSize}>
        {children}
      </Typo>
    </ButtonWrap>
    : <ButtonWrap {...btnState} jenre={jenre}>
      <Typo fSize={btnState.fSize} fWeight={btnState.fWeight} lHeight={btnState.fSize}>
        {children}
      </Typo>
      <MlContainer size={props.children ? size === 'lg' || size === 'md' ? '0.5em' : '0.25em' : '0px'} width={props.size === 'xs' ? "1.25em" : "1.5em"} height={props.size === 'xs' ? "1.25em" : "1.5em"}>
        {props.jenre === 'primary' ? <Icon src={props.src ? props.src : searchIcon} alt="searchIcon" width={props.size === 'xs' ? "1.25em" : "1.5em"} height={props.size === 'xs' ? "1.25em" : "1.5em"} />
        : <Icon src={props.src ? props.src : searchMuteIcon} alt="searchMuteIcon" width={props.size === 'xs' ? "1.25em" : "1.5em"} height={props.size === 'xs' ? "1.25em" : "1.5em"} />}
      </MlContainer>
    </ButtonWrap>}
    </>
  )
}
