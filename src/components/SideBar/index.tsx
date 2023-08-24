import { SideBarContainer, UlContainer, LiContainer, ImgContainer,SpanContainer } from "./styled";
import fogueteIcon from "../../assets/foguete.png"
import foguetevoando from "../../assets/foguetevoando.png"
import info from "../../assets/info.png"

export default function SideBar(){
     return (
          <SideBarContainer>
               <UlContainer >
                    <LiContainer className="li">
                         <ImgContainer src={foguetevoando} className="foguete-logo" alt="foguete" />
                         <SpanContainer className="sp">Lançamentos</SpanContainer>
                    </LiContainer>
                    <LiContainer>
                         <ImgContainer src={fogueteIcon} className="foguete-logo" alt="foguete" />
                         <SpanContainer className="sp">Foguetes</SpanContainer>
                    </LiContainer>
                    <LiContainer>
                         <ImgContainer src={info} className="foguete-logo" alt="foguete" />
                         <SpanContainer className="sp">Informações</SpanContainer>
                    </LiContainer>
               </UlContainer>
          </SideBarContainer>
     );
}