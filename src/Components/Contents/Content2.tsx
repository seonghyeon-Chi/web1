import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';
import { Typo } from '../Typo';
import GlobalContext from '../../GlobalContext';
import { ContentContainer, ImageWrap, ContentWrap } from './Content.d';

interface Content2Props {
  src?: string;
  name?: string;
  where?: string;
}

export const Content2 = (props: Content2Props) => {
  const context = React.useContext(GlobalContext)

  return (
    <ContentContainer gap="8px" width="200px">
      <ImageWrap width="200px" height="180px">
        {props.src ? <Image src={props.src} radius="12px" alt="thumbnail" height="180px" /> : null}
      </ImageWrap>
      <ContentWrap height="44px">
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="24px">{props.name ? props.name : "name"}</Typo>
        <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="20px">{props.where? props.where : "Where"}</Typo>
      </ContentWrap>
    </ContentContainer>
  )
}