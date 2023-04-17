import React from 'react';
import styled from 'styled-components';
import { Forms } from './Forms';
import locationIcon from '../assets/icon-lacation-yellow.svg'
import { Divider } from './Divider';
import cicleIcon from '../assets/icon-cicle.svg'
import calendarIcon from '../assets/icon-calendar-yellow.svg'
import guestsIcon from '../assets/icon-guests.svg'
import { Button } from './Button';

const SearchbarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0.5em;
  width: 71.375em;
  height: 5.5em;
  background: #fff;
  border-radius: 12px;
`

const dommy = ['Explore', 'nearby', 'destinations']

export const Searchbar = () => {
  return (
    <SearchbarContainer>
      <Forms src={locationIcon} label="" contents={dommy} width="18.75em"></Forms>
      <Forms src={cicleIcon} label="Activity" content="All Activites" width="15.95em" />
      <Forms src={calendarIcon} label="When" content="Choose a Date" width="15.95em" />
      <Forms src={guestsIcon} label="Guests" content="1 guest" width="15.95em" />
      <Button jenre="primary" size="md" direction="left" />
    </SearchbarContainer>
  )
}