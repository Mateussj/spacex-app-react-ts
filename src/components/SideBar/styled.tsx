import styled from 'styled-components';

export const SideBarContainer = styled.div`
     display: flex;
     flex: 0 0 250px; /* Define a largura da barra lateral */
     align-items: center;
     color: white;
     padding: 20px;
`;

export const UlContainer = styled.ul`
     display: flex;
     flex-direction: column;
     align-items: start;
     text-decoration: none;
     list-style: none;
     padding: 0;
`;
export const LiContainer = styled.li`
     cursor: pointer;
     display: flex;
     align-items: center;
     padding: 15px;
     &:hover {
          .sp {
               opacity:1;
          }
          background-color: white;
          border-radius: 50px;
          transition: all 0.5s ease-in-out;
          margin: 10px;
          padding: 20px;
     }
`;


export const ImgContainer = styled.img`
     width: 80px;
     height: 80px;
`;

export const SpanContainer = styled.span`
     
     opacity: 0;
     color: #282c34;
     transition: opacity 0.3s ease;
     
`;
