import React from 'react';
import SideBar from '../../components/SideBar';
import HomeContainer from './styled'

export default function HomePage(){
  return (
    <HomeContainer>
      <SideBar/>
      Home
    </HomeContainer>
  );
}