import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';
import locationIcon from '../../assets/icon-lacation.svg'
import { Typo } from '../Typo';
import GlobalContext from '../../GlobalContext';
import { Icon } from '../Icon';
import { Rating } from '../Rating';
import { ContentContainer, ImageWrap, ContentWrap } from './Content.d';

interface Content1Props {
  src?: string;
  title?: string;
  map?: string;
  rating?: number;
}

const SubContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

const LocationWrap = styled(SubContentWrap)`
  width: 224px;
  color: ${props => props.theme.color.gray};
`

export const Content1 = (props: Content1Props) => {
  const context = React.useContext(GlobalContext)

  return (
    <ContentContainer gap="10px" width="316px">
      <ImageWrap width="316px" height="380px">
        {props.src ? <Image src={props.src} radius="12px" alt="thumbnail" height="380px" /> : null}
      </ImageWrap>
      <ContentWrap gap="12px" height="56px">
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="24px">{props.title ? props.title : "Monastero Santa Rosa Hotel & Spa"}</Typo>
        <SubContentWrap>
          <LocationWrap>
            <Icon src={locationIcon} alt="locationIcon" width="16px" height="16px" />
            <Typo fSize={context.font.fs5} fWeight="400" lHeight="20px">{props.map ? props.map : 'Salerno, Italy'}</Typo>
          </LocationWrap>
          <Rating rating={props.rating} />
        </SubContentWrap>
      </ContentWrap>
    </ContentContainer>
  )
}