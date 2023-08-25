import { 
     CardContainerTitulo, 
     CardContainer, 
     ConteudoCard, 
     ImgContainer, 
     ParagrafoContainer, 
     ImgDetails,
     SpanContainer } from './styled';
import info from "./../../assets/right-arrows.png";

export default function Card(props: any){
     return (
          <CardContainer id={props.id}>
               
               <ConteudoCard>
                    <ImgContainer src={props.dados.links.mission_patch_small} className="foguete-logo" alt="foguete"/>
                    <CardContainerTitulo>{props.dados.mission_name}<hr/></CardContainerTitulo>
                    <ParagrafoContainer>{props.dados.details}
                         Mais Detalhes no botão abaixo
                         </ParagrafoContainer>
                    <SpanContainer>
                         <ImgDetails src={info} className="foguete-logo" alt="foguete"/>
                    </SpanContainer>
                    
               </ConteudoCard>
          </CardContainer>
     );
}