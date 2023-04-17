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
    <ContentContainer gap="0.5em" width="12.5em">
      <ImageWrap width="12.5em" height="11.25em">
        {props.src ? <Image src={props.src} radius="12px" alt="thumbnail" height="11.25em" /> : null}
      </ImageWrap>
      <ContentWrap height="2.75em">
        <Typo fSize={context.font.fs4} fWeight="500" lHeight="1.5em">{props.name ? props.name : "name"}</Typo>
        <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.gray} lHeight="1.25em">{props.where? props.where : "Where"}</Typo>
      </ContentWrap>
    </ContentContainer>
  )
}