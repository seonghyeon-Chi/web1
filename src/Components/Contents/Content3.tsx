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
  date?: string;
  user?: string;
  comments?: string;
}

const Content3Container = styled(ContentContainer)`
  position: relative;
  flex-direction: row;
  height: 380px;
  width: 668px;
`

const Content3Wrap = styled(ContentWrap)`
  flex-direction: column;
  padding-left: 32px;
  width: 352px;
`

const ContentTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 320px;
  height: 72px;
`

const ContentText = styled(Typo)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  height: 144px;
  width: 320px;
  overflow: hidden; 
`

const PostContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  height: 16px;
`

const PostWrap = styled.span`
  display: flex;
  flex-direction: row;
  gap: 4px;
  height: 16px;
`

export const Content3 = (props: Content3Props) => {
  const context = React.useContext(GlobalContext)
  return (
    <Content3Container width="668px">
      <ImageWrap width="316px" height="380px" radius="24px">
        {props.src ? <Image src={props.src} alt="image" height="380px" />: null}
      </ImageWrap>
      <Content3Wrap>
        <ContentTextWrap>
          <ContentTitle>
            <Typo fSize={context.font.fs1} fWeight="600" fColor={context.color.black} lHeight="36px">
              East Village Ice Cream Crawl
            </Typo>
          </ContentTitle>
          <ContentText fSize={context.font.fs4} fWeight="400" fColor={context.color.gray} lHeight="24px">
            We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…
          </ContentText>
        </ContentTextWrap>
        <PostContainer>
          <PostWrap>
            <Icon src={carendarIcon} alt="carendarIcon" width="16px" height="16px" />
            <Typo fSize={context.font.fs6} fWeight="400" fColor={context.color.gray} lHeight="16px">{props.date ? props.date : 'Today'}</Typo>
          </PostWrap>
          <PostWrap>
            <Icon src={userIcon} alt="userIcon" width="16px" height="16px" />
            <Typo fSize={context.font.fs6} fWeight="400" fColor={context.color.gray} lHeight="16px">{props.user ? props.user : 'user'}</Typo>
          </PostWrap>
          <PostWrap>
            <Icon src={comentsIcon} alt="comentsIcon" width="16px" height="16px" />
            <Typo fSize={context.font.fs6} fWeight="400" fColor={context.color.gray} lHeight="16px">{props.comments ? props.comments : '0'}</Typo>
          </PostWrap>
        </PostContainer>
      </Content3Wrap>
    </Content3Container>
  )
}