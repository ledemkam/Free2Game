import React from 'react';
import styled from 'styled-components';
import { VscHome } from 'react-icons/vsc';
import { GiRetroController } from 'react-icons/gi';
import { TiPlusOutline } from 'react-icons/ti';

import {
   Link
} from "react-router-dom";

const Ul = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   li {
      padding: 25px 10px;
      color: #fff;
      width: 200px;
      height: 15px;
   }

   border-right: 2px solid #ffffff;
   font-size: 20px;
   background-color: #0d2538;
   position: fixed;
   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-70%)')};
   top: 0;
   left: 0;
   height: 100vh;
   width: 300px;
   padding-top: 3.5rem;
   transition: transform 0.3s ease-in-out;
   li {
      color: #fff;
   }
`;

const LeftNav = ({ open }) => {
   return (
      <Ul open={open}>
         <li>
            <Link to="/"><VscHome fontSize="30px" />Home</Link>
         </li>
         <li>
            <Link to="/Allgames"><GiRetroController fontSize="30px" />All Game</Link>
         </li>
         <li>
            <Link to="/AddedPage"><TiPlusOutline fontSize="30px" />Recently Added</Link>
         </li>
      </Ul>
   );
};

export default LeftNav;
