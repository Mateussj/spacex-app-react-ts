import React from 'react';
import SideBar from '../../components/SideBar';
import { HrSearch, HomeContainer, ConteudoContainer, BodyContainer,Body,H1Container, DivSearch, InputSearch, HeaderContainer } from './styled'
import Card from '../../components/Card';
import { BiSearch } from "react-icons/bi";

export default function HomePage(){
  return (
    <HomeContainer>
      <SideBar/>
      <ConteudoContainer>
        <Body>
          <HeaderContainer>
            <H1Container>Últimos Lançamentos</H1Container>
            <DivSearch className="box">
                  <form name="search">
                      <InputSearch type="text" placeholder='Pesquisar...' className="input" name="txt">
                      </InputSearch>
                  </form>
            </DivSearch>
          </HeaderContainer>
          <HrSearch/>
          <BodyContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </BodyContainer>
        </Body>
      </ConteudoContainer>
    </HomeContainer>
  );
}