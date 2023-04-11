import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';
import defImage from '../assets/image-content1-def.svg'
import locationIcon from '../assets/icon-lacation.svg'
import { Typo } from './Typo';
import GlobalContext from '../GlobalContext';
import { Icon } from './Icon';
import { Rating } from './Rating';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 316px;
  background-color: #fff;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  height: 56px;
`

const SubContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

const LocationWrap = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 224px;
  color: ${props => props.theme.color.gray};
`

export const Content1 = () => {
  const context = React.useContext(GlobalContext)

  return (
    <ContentContainer>
      <Image src={defImage} radius="12px" alt="thumbnail" height="380px" />
      <ContentWrap>
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="24px">{"Monastero Santa Rosa Hotel & Spa"}</Typo>
        <SubContentWrap>
          <LocationWrap>
            <Icon src={locationIcon} alt="locationIcon" width="16px" height="16px" />
            <Typo fSize={context.font.fs5} fWeight="400" lHeight="20px">Salerno, Italy</Typo>
          </LocationWrap>
          <Rating rating={3} />
        </SubContentWrap>
      </ContentWrap>
    </ContentContainer>
  )
}