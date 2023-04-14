import React from 'react';
import styled from "styled-components";
import GlobalContext from '../../GlobalContext';
import { Typo } from '../../Components/Typo';
import { Button } from '../../Components/Button';
import allowIcon from '../../assets/icon-allow-right-primary.svg'

type TitleProps = {
  children: string;
  isButton?: boolean;
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 64px;
  height: 112px;
  width: inherit;
`

const TitleWrap = styled.span`
  width: 92.5%;
`

export const Title = ({ children, isButton }: TitleProps) => {
  const context = React.useContext(GlobalContext);
  return (
    <TitleContainer>
      <TitleWrap>
        <Typo fSize={context.font.fs1} fWeight="600" fColor={context.color.black} lHeight="48px">
          {children}
        </Typo>
      </TitleWrap>
      {isButton? <Button src={allowIcon} jenre="secondary" direction="right" size="xs">View all</Button>: null}
    </TitleContainer>
  )
}

