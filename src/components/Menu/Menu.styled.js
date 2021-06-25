import styled from 'styled-components';

export const StyledMenu = styled.nav`
   display: flex;
   flex-direction: column;
   justify-content: center;
   backgroundcolor: #000000;
   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
   height: 100vh;
   text-align: left;
   padding: 2rem;
   position: absolute;
   top: 0;
   left:0;
   transition: transform 0.3s ease-in-out;
   @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
   }
   a {
      font-size: 1,2rem;
      padding: 2rem 0;
      color: #ffffffff
      text-decoration: none;
      border: 2px solid #ffffff
      backgoundcolor = #FF0000 ;
      border-radius: 5px;
      transition: color 0.3s linear;
      @media (max-width: ${({ theme }) => theme.mobile}) {
         font-size: 1.5rem;
         text-align: center;
      }
      &:active {
       
         
         text-align: center;
      }
   }
`;
