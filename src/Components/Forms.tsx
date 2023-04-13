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
  width?: string;
  src?: string;
}

const Form = styled.form<FormsProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  max-height: 72px;
  background: #fff;
  border-radius: 12px;
  width: ${props => props.width};
`

const ContentWrap = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40px;
  max-width: 200px;
  word-break: break-all;
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
    <Form width={props.width}>
      <Icon src={props.src ? props.src : formDefIcon} alt="fromDefIcon" height="24px" width="24px"></Icon>
      <ContentWrap>
        <Label>
          <Typo fSize={context.font.fs5} fWeight='400' lHeight="20px">{props.label ? props.label : 'label'}</Typo>
        </Label>
        <Typo fSize={context.font.fs4} fWeight='500' lHeight="24px">{props.content ? props.content : ''}</Typo>
      </ContentWrap>
    </Form>
  )
}