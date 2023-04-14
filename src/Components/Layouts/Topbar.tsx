import React from 'react';
import styled from 'styled-components';
import logoIcon from '../../assets/icon-logo-white.svg'
import { Icon } from '../Icon';
import { Typo } from '../Typo';
import GlobalContext from '../../GlobalContext';
import { User } from '../User';
import userImage from '../../assets/image-user.svg'

const TopbarContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`

const MainMenuWrap = styled(TopbarContainer)`
  justify-content: center;
  align-items: flex-start;
  width: 1145.43px;
  height: 20px;
`

const MenuItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px;
  gap: 4px;
  height: 20px;  

  &&:hover {
    cursor: pointer;
  }
`

export const Topbar = () => {
  const context = React.useContext(GlobalContext)
  return (
    <TopbarContainer>
      <Icon src={logoIcon} alt="logo" height="35.42px" width="87.57px" />
      <MainMenuWrap>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            home
          </Typo>
        </MenuItem>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            hotels
          </Typo>
        </MenuItem>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            restaurants
          </Typo>
        </MenuItem>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            tours
          </Typo>
        </MenuItem>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            destinations
          </Typo>
        </MenuItem>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            activities
          </Typo>
        </MenuItem>
        <MenuItem>
          <Typo fSize={context.font.fs5} fWeight="400" fColor={context.color.white} lHeight="20px" opacity="0.7">
            contact
          </Typo>
        </MenuItem>
      </MainMenuWrap>
      <User isLogin src={userImage} />
    </TopbarContainer>
  )
}