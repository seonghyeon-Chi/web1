import React from 'react';
import styled from 'styled-components';
import { Topbar } from './Topbar';
import { Searchbar } from '../Searchbar';

const HeaderContainer = styled.header`
  padding: 32px 0px 120px;
`

const HeaderContantWrap = styled.div`
  width: 1360px;
  height: 534px;
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