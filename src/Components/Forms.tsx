import React from 'react';
import styled from 'styled-components';
import formDefIcon from '../assets/icon-form-def.svg'
import { Icon } from './Icon';
import { Typo } from './Typo';
import GlobalContext from '../GlobalContext';

type FormsProps = {
  id?: string;
  label?: string;
  content?: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  max-width: 268px;
  max-height: 72px;
  background: #fff;
  border-radius: 12px;
`

const ContentWrap = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40px;
  width: 98px;
`

const Label = styled.label.attrs(props => {
  htmlFor: props.id;
})`
  font-weight: 400;
  line-height: 20px;
  height: 20px;
  color: ${props => props.theme.color.gray};
`

export const Forms = (props: FormsProps) => {
  const context = React.useContext(GlobalContext)

  return (
    <Form>
      <Icon src={formDefIcon} alt="fromDefIcon" height="24px" width="24px"></Icon>
      <ContentWrap>
        <Label>
          <Typo fSize={context.font.fs5} fWeight='400' lHeight="20px">{props.label ? props.label : 'label'}</Typo>
        </Label>
        <Typo fSize={context.font.fs4} fWeight='500' lHeight="24px">{props.content ? props.content : ''}</Typo>
      </ContentWrap>
    </Form>
  )
}