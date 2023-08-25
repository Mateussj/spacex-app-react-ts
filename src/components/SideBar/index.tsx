import { SideBarContainer, UlContainer, LiContainer, ImgContainer,SpanContainer, HrContainer } from "./styled";
import fogueteIcon from "../../assets/foguete.png"
import foguetevoando from "../../assets/foguetevoando.png"
import info from "../../assets/info.png"
import dashboard from "../../assets/receiver.png"

export default function SideBar(){
     return (
          <SideBarContainer>
               <UlContainer>
                    <LiContainer className="">
                         <ImgContainer src={dashboard} className="active" alt="foguete" />
                         <SpanContainer className="sp">Dashboard</SpanContainer>
                    </LiContainer>
                    <LiContainer className="active">
                         <ImgContainer src={foguetevoando} className="active" alt="foguete" />
                         <SpanContainer className="sp">Lançamentos</SpanContainer>
                    </LiContainer>
                    <LiContainer className="">
                         <ImgContainer src={fogueteIcon} className="foguete-logo" alt="foguete" />
                         <SpanContainer className="sp">Foguetes</SpanContainer>
                    </LiContainer>
                    <LiContainer className="">
                         <ImgContainer src={info} className="foguete-logo" alt="foguete" />
                         <SpanContainer className="sp">Informações</SpanContainer>
                    </LiContainer>
               </UlContainer>
          </SideBarContainer>
     );
}