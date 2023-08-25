import React, { useState,useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { HrSearch, HomeContainer, ConteudoContainer, BodyContainer,Body,H1Container, DivSearch, InputSearch, HeaderContainer } from './styled'
import Card from '../../components/Card';
import api from "../../services";
import dadosApiFake from './dados';

export default function HomePage(){

  const [lancamentos, setLancamentos] = useState<any>([]);

  useEffect(() => {
    (async () => {
      let res = await dadosApiFake();
      setLancamentos(res);
    })();
  }, []);

  return (
    <HomeContainer>
      <SideBar/>
      <ConteudoContainer>
        <Body>
          <HeaderContainer>
            <H1Container>Últimas Missões</H1Container>
            <DivSearch className="box">
                  <form name="search">
                      <InputSearch type="text" placeholder='Pesquisar...' className="input" name="txt">
                      </InputSearch>
                  </form>
            </DivSearch>
          </HeaderContainer>
          <HrSearch/>
          <BodyContainer>

            { lancamentos.map((item: any, key: number) => {
              console.log(key)
              return (<Card id={key} dados={item}/>)
              })
            }
            
          </BodyContainer>
        </Body>
      </ConteudoContainer>
    </HomeContainer>
  );
}