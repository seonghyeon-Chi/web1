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
    <ContentContainer gap="8px" width="320px">
      <ImageWrap width="316px" height="380px">
        {props.src ? <Image src={props.src} alt="thumbnail" height="380px" />: null}
      </ImageWrap>
      <ContentWrap height="44px">
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="24px">{props.name? props.name : "name"}</Typo>
      </ContentWrap>
    </ContentContainer>
  )
}