import React from 'react';
import styled from 'styled-components';
import { Topbar } from './Topbar';
import { Searchbar } from '../Searchbar';

const HeaderContainer = styled.header`
  padding: 2em 0px 7.5em;
`

const HeaderContantWrap = styled.div`
  width: 85em;
  height: 33.375em;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Topbar />
      <HeaderContantWrap></HeaderContantWrap>
      <Searchbar />
    </HeaderContainer>
  )
}