import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';
import { Typo } from '../Typo';
import GlobalContext from '../../GlobalContext';
import { ContentContainer, ImageWrap, ContentWrap } from './Content.d';

interface Content4Props {
  src?: string;
  name?: string;
}

export const Content4 = (props: Content4Props) => {
  const context = React.useContext(GlobalContext)

  return (
    <ContentContainer gap="0.5em" width="20em">
      <ImageWrap width="19.750em" height="23.750em">
        {props.src ? <Image src={props.src} alt="thumbnail" height="23.74em" />: null}
      </ImageWrap>
      <ContentWrap height="2.750em">
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="1.5em">{props.name? props.name : "name"}</Typo>
      </ContentWrap>
    </ContentContainer>
  )
}