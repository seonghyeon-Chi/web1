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
  contents?: Array<string>;
  width?: string;
  src?: string;
}

const Form = styled.form<FormsProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  gap: 1em;
  max-height: 4.5em;
  background: #fff;
  border-radius: 12px;
  width: ${props => props.width};
`

const ContentWrap = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 2.5em;
  max-width: 12.5em;
  word-break: break-all;
`

const Label = styled.label.attrs(props => {
  htmlFor: props.id;
})`
  font-weight: 400;
  line-height: 1.25em;
  height: 1.25em;
  color: ${props => props.theme.color.gray};
`

export const Forms = (props: FormsProps) => {
  const context = React.useContext(GlobalContext)

  return (
    <Form width={props.width}>
      <Icon src={props.src ? props.src : formDefIcon} alt="fromDefIcon" height="1.5em" width="1.5em"></Icon>
      <ContentWrap>
        <Label>
          <Typo fSize={context.font.fs5} fWeight='400' lHeight="1.25em">{props.label ? props.label : ''}</Typo>
        </Label>
        <Typo fSize={context.font.fs4} fWeight='500' lHeight="1.5em">{props.content ? props.content : ''}</Typo>
        {props.contents ? props.contents.map((item, idx) => (<Typo key={idx} fSize={context.font.fs4} fWeight='500' lHeight="1.5em">{item ? item : ''}</Typo>)): null}
      </ContentWrap>
    </Form>
  )
}