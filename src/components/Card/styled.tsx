import styled from 'styled-components';

export const ConteudoCard = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     flex-direction: column;
     font-family: sans;
`;
export const CardContainerTitulo = styled.h1`
     color: gray;
     align-items: center;
     font-weight: bold;
     margin: 18px;
`;
export const CardContainer = styled.div`
     margin: 20px;
     padding: 10px;
     display: flex;
     background-color: white;
     border-radius: 7px 7px 7px 7px;
     width: 270px;
     height: 450px;
     overflow: hidden;
     &:hover{
          scale: 1.1;
     }
`;

export const ImgContainer = styled.img`
     height: 150px;
     margin-top: 0px;
     border-radius: 70px 70px 70px 70px;
`;

export const ImgDetails = styled.img`
     margin-top: 10px;
     height: 40px;
     cursor: pointer;
`;

export const ParagrafoContainer = styled.p`
     margin-left: 15px;
     color: black;
`;

export const SpanContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: end;
`;
