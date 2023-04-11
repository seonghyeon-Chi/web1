import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';
import defImage from '../assets/image-content2-def.svg'
import { Typo } from './Typo';
import GlobalContext from '../GlobalContext';


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 200px;
  background-color: #fff;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 44px;
`

export const Content2 = () => {
  const context = React.useContext(GlobalContext)

  return (
    <ContentContainer>
      <Image src={defImage} radius="12px" alt="thumbnail" height="180px" />
      <ContentWrap>
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="24px">{"name"}</Typo>
        <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">{"Where"}</Typo>
      </ContentWrap>
    </ContentContainer>
  )
}