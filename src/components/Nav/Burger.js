import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';

const StyledBurger = styled.div`
   width: 2rem;
   height: 2rem;
   top: 1, 17%;
   left: 25px;
   display: flex;
   justify-content: space-around;

   div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
      border-radius: 10px;
      transform-origin: 1px center;
      transition: all 0.3s linear;

      &:nth-child(1) {
         transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
         transform: ${({ open }) =>
            open ? 'translateX(100%)' : 'translateX(0)'};
         opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
         transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
   }
`;

const Burger = () => {
   const [open, setOpen] = useState(false);

   return (
      <>
         {/* <div open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
         </div>
         <LeftNav open={open} /> */}
         <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div className="animedBurger" />
            <div />
            <div className="animedBurger" />
         </StyledBurger>
         <LeftNav open={open} />
      </>
   );
};

export default Burger;
