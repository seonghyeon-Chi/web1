import React from 'react';
import styled from 'styled-components';
import { Typo } from './Typo';
import GlobalContext from '../GlobalContext';
import { Image } from './Image';

interface UserProps {
  content?: string;
  name?: string;
  src?: string;
  isLogin: boolean;
}

const UserContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
  width: 8.938em;
  height: 1.75em;
`

const ContentWrap = styled(UserContainer)`
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
  width: 5.438em;
  height: 2.5em;
`

const Avatar = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  isolation: isolate;
  width: 3em;
  height: 3em;
  background-color: ${props => props.theme.color.gray};
  border-radius: 62.438em;
`

const NotificationDot = styled.span`
  box-sizing: border-box;
  position: absolute;
  width: 0.75em;
  height: 0.75em;
  right: 0px;
  top: 0px;
  background: #ff0000;
  border: 1px solid #161414;
  border-radius: 12px;
`

export const User = (props: UserProps) => {
  const context = React.useContext(GlobalContext)

  return (
    <UserContainer>
      <ContentWrap>
        <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="1.25em" opacity="0.5">{props.content ? props.content : 'Holla,'}</Typo>
        <Typo fSize={context.font.fs5} fWeight="500" fColor={context.color.white} lHeight="1.25em">{props.name ? props.name : 'Ales Nesetril'}</Typo>
      </ContentWrap>
      <Avatar>
        {props.src ? <Image src={props.src} alt="user" height="100%" /> : null}
        {props.isLogin ? <NotificationDot></NotificationDot> : null}
      </Avatar>
    </UserContainer>
  )
}