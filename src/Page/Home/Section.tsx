import React from 'react';
import styled from 'styled-components';
import { Typo } from '../../Components/Typo';
import { Title } from './Title';
import { Content2 } from '../../Components/Contents/Content2';
import { SectionContainer, SectionWrap, SectionContentWrap } from './Section.d'
import def1Image from './sample_image/image-section1-def1.svg'
import def2Image from './sample_image/image-section1-def2.svg'
import def3Image from './sample_image/image-section1-def3.svg'
import def4Image from './sample_image/image-section1-def4.svg'
import def5Image from './sample_image/image-section1-def5.svg'
import def6Image from './sample_image/image-section1-def6.svg'
import { Content1 } from '../../Components/Contents/Content1';

export const Section1 = () => {
  return (
    <SectionContainer first>
      <SectionWrap height="344px">
        <Title>Popular Destinations</Title>
        <SectionContentWrap height="232px">
          <Content2 src={def1Image} name="Big Sur" where="California, USA"/>
          <Content2 src={def2Image} name="Prescott" where="Arizona, USA"/>
          <Content2 src={def3Image} name="Fort Mayers" where="Florida, USA"/>
          <Content2 src={def4Image} name="Tucson" where="Arizona, USA"/>
          <Content2 src={def5Image} name="St. Joseph" where="Michigan, USA"/>
          <Content2 src={def6Image} name="Madrid" where="Spain"/>
        </SectionContentWrap>
      </SectionWrap>
    </SectionContainer>
  )
}

import def1S2Image from './sample_image/image-section2-def1.svg'
import def2S2Image from './sample_image/image-section2-def2.svg'
import def3S2Image from './sample_image/image-section2-def3.svg'
import def4S2Image from './sample_image/image-section2-def4.svg'
import { Content4 } from '../../Components/Contents/Content4';

export const Section2 = () => {
  return (
    <SectionContainer>
      <SectionWrap height="558px">
        <Title isButton>Hotels and Restaurants</Title>
        <SectionContentWrap height="446px">
          <Content1 src={def1S2Image} map="Salerno, Italy" title={"Monastero Santa Rosa Hotel & Spa"} rating={5}/>
          <Content1 src={def2S2Image} map="Lake Como, Italy" title="Grand Hotel Tremezzo" rating={3}/>
          <Content1 src={def3S2Image} map="Udaipur, India" title="The Oberoi Udaivilas, Udaipur" rating={4}/>
          <Content1 src={def4S2Image} map="Los Angeles, United States" title="AKA Beverly Hills" rating={3}/>
        </SectionContentWrap>
      </SectionWrap>
    </SectionContainer>
  )
}

import def1S3Image from './sample_image/image-section3-def1.svg'
import def2S3Image from './sample_image/image-section3-def2.svg'
import def3S3Image from './sample_image/image-section3-def3.svg'
import def4S3Image from './sample_image/image-section3-def4.svg'

export const Section3 = () => {
  return (
    <SectionContainer>
      <SectionWrap height="532px">
        <Title isButton>Activities</Title>
        <SectionContentWrap height="420px">
          <Content4 src={def1S3Image} name="Sailing"/>
          <Content4 src={def2S3Image} name="Climbing"/>
          <Content4 src={def3S3Image} name="Skiing"/>
          <Content4 src={def4S3Image} name="Hiking"/>
        </SectionContentWrap>
      </SectionWrap>
    </SectionContainer>
  )
}

import { AboutUs } from './AboutUs';

export const Section4 = () => {
  return (
    <SectionContainer>
      <AboutUs />
    </SectionContainer>
  )
}