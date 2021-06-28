// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import {
   Link
} from "react-router-dom";


const Menu = ({ open }) => {
   return (
      <StyledMenu open={open}>
         {/* <a href="/">Home</a>
         <a href="/">Allgame</a>
         <a href="/">Recently Added</a> */}

         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/users">Users</Link>
               </li>
            </ul>
         </nav>
      </StyledMenu>
   );
};
Menu.propTypes = {
   open: bool.isRequired,
};
export default Menu;
