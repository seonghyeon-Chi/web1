import React from 'react';
import styled from 'styled-components';
import { Typo } from '../Typo';
import GlobalContext from '../../GlobalContext';
import { Image } from '../Image';
import carendarIcon from '../../assets/icon-calendar.svg'
import userIcon from '../../assets/icon-user.svg'
import comentsIcon from '../../assets/icon-comments.svg';
import { Icon } from '../Icon';
import { ContentContainer, ImageWrap, ContentWrap } from './Content.d';

interface Content3Props {
  src?: string;
  title?: string;
  content?: string;
  date?: string;
  user?: string;
  comments?: string;
}

const Content3Container = styled(ContentContainer)`
  position: relative;
  flex-direction: row;
  height: 23.75em;
  width: 41.75em;
`

const Content3Wrap = styled(ContentWrap)`
  flex-direction: column;
  padding-left: 2em;
  width: 22em;
`

const ContentTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`

const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20em;
  height: 4.5em;
`

const ContentText = styled(Typo)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75em;
  height: 9em;
  width: 20em;
  overflow: hidden; 
`

const PostContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5em;
  height: 1em;
`

const PostWrap = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.25em;
  height: 1em;
`

export const Content3 = (props: Content3Props) => {
  const context = React.useContext(GlobalContext)
  return (
    <Content3Container width="41.750em">
      <ImageWrap width="19.750em" height="23.750em" radius="24px">
        {props.src ? <Image src={props.src} alt="image" height="23.75em" />: null}
      </ImageWrap>
      <Content3Wrap>
        <ContentTextWrap>
          <ContentTitle>
            <Typo fSize={context.font.fs1} fWeight="600" fColor={context.color.black} lHeight="36px">
              {props.title}
            </Typo>
          </ContentTitle>
          <ContentText fSize={context.font.fs4} fWeight="400" fColor={context.color.gray} lHeight="24px">
            {props.content}
          </ContentText>
        </ContentTextWrap>
        <PostContainer>
          <PostWrap>
            <Icon src={carendarIcon} alt="carendarIcon" width="1em" height="1em" />
            <Typo fSize={context.font.fs6} fWeight="400" fColor={context.color.gray} lHeight="1em">{props.date ? props.date : 'Today'}</Typo>
          </PostWrap>
          <PostWrap>
            <Icon src={userIcon} alt="userIcon" width="1em" height="1em" />
            <Typo fSize={context.font.fs6} fWeight="400" fColor={context.color.gray} lHeight="1em">{props.user ? props.user : 'user'}</Typo>
          </PostWrap>
          <PostWrap>
            <Icon src={comentsIcon} alt="comentsIcon" width="1em" height="1em" />
            <Typo fSize={context.font.fs6} fWeight="400" fColor={context.color.gray} lHeight="1em">{props.comments ? props.comments : '0'}</Typo>
          </PostWrap>
        </PostContainer>
      </Content3Wrap>
    </Content3Container>
  )
}