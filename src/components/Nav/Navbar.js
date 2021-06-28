import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
   width: 55px;
   height: 100%;
   padding: 0 20px;
   display: flex;
   position: fixed;
   justify-content: space-between;

   .logo {
      padding: 15px 0;
   }
`;

const Navbar = () => {
   return (
      <Nav>
         <Burger />
      </Nav>
   );
};

export default Navbar;
