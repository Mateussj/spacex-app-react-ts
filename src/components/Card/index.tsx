import { 
     CardContainerTitulo, 
     CardContainer, 
     ConteudoCard, 
     ImgContainer, 
     ParagrafoContainer, 
     ImgDetails,
     SpanContainer } from './styled';
import info from "./../../assets/right-arrows.png";

export default function Card(){
     return (
          <CardContainer>
               
               <ConteudoCard>
                    <ImgContainer src="https://images2.imgbox.com/11/f0/xPDcIpmS_o.png" className="foguete-logo" alt="foguete"/>
                    <CardContainerTitulo>Iridium NEXT Mission 8<hr/></CardContainerTitulo>
                    
                    <ParagrafoContainer>SpaceX's first flight of 2019 w aceX's first flight of 2019... Mais Detalhes no botão abaixo</ParagrafoContainer>
                    <SpanContainer>
                         
                         <ImgDetails src={info} className="foguete-logo" alt="foguete"/>
                    </SpanContainer>
                    
               </ConteudoCard>
          </CardContainer>
     );
}