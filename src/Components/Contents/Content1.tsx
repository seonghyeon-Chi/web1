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
  gap: 0.25em;
`

const LocationWrap = styled(SubContentWrap)`
  width: 14em;
  color: ${props => props.theme.color.gray};
`

export const Content1 = (props: Content1Props) => {
  const context = React.useContext(GlobalContext)

  return (
    <ContentContainer gap="0.625em" width="19.750em">
      <ImageWrap width="19.750em" height="23.750em">
        {props.src ? <Image src={props.src} radius="0.75em" alt="thumbnail" height="23.750em" /> : null}
      </ImageWrap>
      <ContentWrap gap="0.750em" height="3.5em">
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="1.5em">{props.title ? props.title : "Monastero Santa Rosa Hotel & Spa"}</Typo>
        <SubContentWrap>
          <LocationWrap>
            <Icon src={locationIcon} alt="locationIcon" width="1em" height="1em" />
            <Typo fSize={context.font.fs5} fWeight="400" lHeight="1.25em">{props.map ? props.map : 'Salerno, Italy'}</Typo>
          </LocationWrap>
          <Rating rating={props.rating} />
        </SubContentWrap>
      </ContentWrap>
    </ContentContainer>
  )
}