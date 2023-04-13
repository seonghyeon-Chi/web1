import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import logoIcon from '../../assets/icon-logo-black.svg'
import { Typo } from '../Typo';
import GlobalContext from '../../GlobalContext';
import facebookIcon from '../../assets/icon-facebook.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import instagramIcon from '../../assets/icon-instagram.svg'
import { Forms } from '../Forms';
import { Button } from '../Button';
import emailIcon from '../../assets/icon-email.svg'
import allowIcon from '../../assets/icon-allow-right.svg'

const FooterContainer = styled.footer`
  /* position: absolute; */
  /* bottom: 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 5%;
  height: 164px;
`

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  height: 164px;
  background-color: #f9f9f9;
`

const ContentContainer = styled(FooterWrap)`
  flex-direction: row;
  gap: 64px;
`

const Content1Wrap = styled(ContentContainer)`
  flex-direction: column;
  gap: 32px;
  width: 354.5px;
  height: 155.42px;
`

const Content1 = styled(Content1Wrap)`
  gap: 16px;
  height: 91.42px;
`

const SocialsWrap = styled(Content1Wrap)`
  flex-direction: row;
  gap: 32px;
  width: 160px;
  height: 32px;
`

const Content2Wrap = styled(ContentContainer)`
  width: 505.5px;
`

const Content2 = styled(Content2Wrap)`
  flex-direction: column;
  gap: 20px;
  width: 125.83px;
  height: 164px;
`

const ContentList = styled(Content2)`
  gap: 12px;
  height: 116px;

  &&:hover {
    cursor: pointer;
  }
`

const Content3Wrap = styled(ContentContainer)`
  gap:20px;
  flex-direction: column;
  width: 388px;
  height: 148px;
`

const Content3 = styled(Content3Wrap)`
  flex-direction: row;
  gap: 16px;
  height: 72px;
`


export const Footer = () => {
  const context = React.useContext(GlobalContext)

  return (
    <FooterContainer>
      <FooterWrap>
        <ContentContainer>
          <Content1Wrap>
            <Content1>
              <Icon src={logoIcon} alt="logoIcon" height="35.42px" width="87.57px" />
              <Typo fSize={context.font.fs3} fWeight="400" fColor={context.color.gray} lHeight="20px">
                We always make our customers happy by providing as many choises as possible
              </Typo>
            </Content1>
            <SocialsWrap>
              <Icon src={facebookIcon} alt="facebookIcon" height="32px" width="32px" />
              <Icon src={twitterIcon} alt="twitterIcon" height="32px" width="32px" />
              <Icon src={instagramIcon} alt="instagramIcon" height="32px" width="32px" />
            </SocialsWrap>
          </Content1Wrap>
          <Content2Wrap>
            <Content2>
              <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="28px">
                About
              </Typo>
              <ContentList>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  About Us
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Features
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  News
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Menu
                </Typo>
              </ContentList>
            </Content2>
            <Content2>
              <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="28px">
                Company
              </Typo>
              <ContentList>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Why 2rism
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Partner With Us
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  FAQ
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Blog
                </Typo>
              </ContentList>
            </Content2>
            <Content2>
              <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="28px">
                Support
              </Typo>
              <ContentList>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Account
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Support Center
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Feedback
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">
                  Contact Us
                </Typo>
              </ContentList>
            </Content2>
          </Content2Wrap>
          <Content3Wrap>
            <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="28px">
              Subscribe on our destination review newsletters
            </Typo>
            <Content3>
              <Forms src={emailIcon} label="your Email" content="seonghyeon@gmail.com" width="300px"></Forms>
              <Button src={allowIcon} size="lg" direction="left" jenre="primary"></Button>
            </Content3>
          </Content3Wrap>
        </ContentContainer>
      </FooterWrap>
    </FooterContainer>
  )
}