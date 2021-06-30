import '../../css/Navigation.css';
import { VscHome } from 'react-icons/vsc';
import { GiRetroController } from 'react-icons/gi';
import { TiPlusOutline } from 'react-icons/ti';
import { useState } from 'react'

import {
   NavLink,
   Link
} from 'react-router-dom';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <nav className={isOpen ? "open" : "closeNav"}>
         <div className="burgerMenu" onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
         </div>
         <ul>
            <li>
               <NavLink to="/Home" activeStyle={{ backgroundColor: "#FF4654", borderRadius: "10px" }}>
                  <VscHome fontSize="30px" />
                  <span style={{ display: isOpen ? "inline-block" : "none" }}>Home</span>
               </NavLink>
            </li>
            <li>
               <NavLink to="/Allgames" activeStyle={{ backgroundColor: "#FF4654", borderRadius: "10px" }}>
                  <GiRetroController fontSize="30px" />
                  <span style={{ display: isOpen ? "inline-block" : "none" }}>All Game</span>
               </NavLink>
            </li>
            <li>
               <NavLink to="/AddedPage" activeStyle={{ backgroundColor: "#FF4654", borderRadius: "10px" }}>
                  <TiPlusOutline fontSize="30px" />
                  <span style={{ display: isOpen ? "inline-block" : "none" }}>Recently Added</span>
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;