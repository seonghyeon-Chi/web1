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
  padding: 7.5em 5%;
  height: 10.25em;
`

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625em;
  height: 10.25em;
  background-color: #f9f9f9;
`

const ContentContainer = styled(FooterWrap)`
  flex-direction: row;
  gap: 4em;
`

const Content1Wrap = styled(ContentContainer)`
  flex-direction: column;
  gap: 2em;
  width: 22.125em;
  height: 7.2em;
`

const Content1 = styled(Content1Wrap)`
  gap: 1em;
  height: 5.7em;
`

const SocialsWrap = styled(Content1Wrap)`
  flex-direction: row;
  gap: 2em;
  width: 10em;
  height: 2em;
`

const Content2Wrap = styled(ContentContainer)`
  width: 31.575em;
`

const Content2 = styled(Content2Wrap)`
  flex-direction: column;
  gap: 1.25em;
  width: 7.85em;
  height: 10.25em;
`

const ContentList = styled(Content2)`
  gap: 0.75em;
  height: 7.25em;

  &&:hover {
    cursor: pointer;
  }
`

const Content3Wrap = styled(ContentContainer)`
  gap: 1.25em;
  flex-direction: column;
  width: 24.25em;
  height: 9.25em;
`

const Content3 = styled(Content3Wrap)`
  flex-direction: row;
  gap: 1em;
  height: 4.5em;
`


export const Footer = () => {
  const context = React.useContext(GlobalContext)

  return (
    <FooterContainer>
      <FooterWrap>
        <ContentContainer>
          <Content1Wrap>
            <Content1>
              <Icon src={logoIcon} alt="logoIcon" height="2.22em" width="5.47em" />
              <Typo fSize={context.font.fs3} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                We always make our customers happy by providing as many choises as possible
              </Typo>
            </Content1>
            <SocialsWrap>
              <Icon src={facebookIcon} alt="facebookIcon" height="2em" width="2em" />
              <Icon src={twitterIcon} alt="twitterIcon" height="2em" width="2em" />
              <Icon src={instagramIcon} alt="instagramIcon" height="2em" width="2em" />
            </SocialsWrap>
          </Content1Wrap>
          <Content2Wrap>
            <Content2>
              <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="1.75em">
                About
              </Typo>
              <ContentList>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  About Us
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Features
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  News
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Menu
                </Typo>
              </ContentList>
            </Content2>
            <Content2>
              <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="1.75em">
                Company
              </Typo>
              <ContentList>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Why 2rism
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Partner With Us
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  FAQ
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Blog
                </Typo>
              </ContentList>
            </Content2>
            <Content2>
              <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="1.75em">
                Support
              </Typo>
              <ContentList>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Account
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Support Center
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Feedback
                </Typo>
                <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">
                  Contact Us
                </Typo>
              </ContentList>
            </Content2>
          </Content2Wrap>
          <Content3Wrap>
            <Typo fSize={context.font.fs3} fWeight="500" fColor={context.color.black} lHeight="1.75em">
              Subscribe on our destination review newsletters
            </Typo>
            <Content3>
              <Forms src={emailIcon} label="your Email" content="seonghyeon@gmail.com" width="18.75em"></Forms>
              <Button src={allowIcon} size="lg" direction="left" jenre="primary"></Button>
            </Content3>
          </Content3Wrap>
        </ContentContainer>
      </FooterWrap>
    </FooterContainer>
  )
}