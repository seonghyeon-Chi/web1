import React from 'react';
import styled from 'styled-components';
import { Typo } from '../../Components/Typo';
import GlobalContext from '../../GlobalContext';
import { Button } from '../../Components/Button';
import allowIcon from '../../assets/icon-allow-right-primary.svg'
import { Image } from '../../Components/Image';
import defImage from './sample_image/image-section4-def.svg'

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  width: 1128px;
  height: 488px;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 548px;
  height: 312px;
`

const ImageWrap = styled.div`
  width: 548px;
  height: 488px;
`

export const AboutUs = () => {
  const context = React.useContext(GlobalContext)
  return (
    <AboutUsContainer>
      <ContentWrap>
        <Typo fSize={context.font.fs1} fWeight="600" fColor={context.color.black} lHeight="32px">
          About Us
        </Typo>
        <Typo fSize={context.font.fs4} fWeight="400" fColor={context.color.gary2} lHeight="32px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typo>
        <Button src={allowIcon} jenre="secondary" direction="right" size="xs">Read more</Button>
      </ContentWrap>
      <ImageWrap>
        <Image src={defImage} alt="defImage" height="488px" radius="24px"/>
      </ImageWrap>
    </AboutUsContainer>
  )
}