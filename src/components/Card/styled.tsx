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
     width: 100%;
     display: flex;
     flex-direction: column;
     margin: 20px;
     padding: 10px;     
     justify-content: space-between;
     background-color: white;
     border-radius: 7px 7px 7px 7px;
     width: 270px;
     height: 450px;
     overflow: hidden;
     &:hover{
          scale: 1.1;
          background-color: #EBEBEB;
     }
`;

export const ImgContainer = styled.img`
     height: 150px;
     margin-top: 0px;
`;

export const ImgDetails = styled.img`
     margin-top: 10px;
     height: 40px;
     cursor: pointer;
     &:hover{
          scale: 1.5;
     }
`;

export const ParagrafoContainer = styled.p`
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 4; // Quantidade de linhas
     -webkit-box-orient: vertical; 
     margin-left: 15px;
     color: black;
`;

export const SpanContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: end;
`;
