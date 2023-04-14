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
  padding: 8px;
  width: 1142px;
  height: 88px;
  background: #fff;
  border-radius: 12px;
`

const dommy = ['Explore', 'nearby', 'destinations']

export const Searchbar = () => {
  return (
    <SearchbarContainer>
      <Forms src={locationIcon} label="" contents={dommy} width="300px"></Forms>
      <Forms src={cicleIcon} label="Activity" content="All Activites" width="255.33px" />
      <Forms src={calendarIcon} label="When" content="Choose a Date" width="255.33px" />
      <Forms src={guestsIcon} label="Guests" content="1 guest" width="255.33px" />
      <Button jenre="primary" size="md" direction="left" />
    </SearchbarContainer>
  )
}