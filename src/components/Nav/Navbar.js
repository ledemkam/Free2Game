import '../../css/Navigation.css';
import { VscHome } from 'react-icons/vsc';
import { GiRetroController } from 'react-icons/gi';
import { TiPlusOutline } from 'react-icons/ti';
import { useState } from 'react'

import {
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
               <Link to="/">
                  <VscHome fontSize="30px" />
                  <span style={{ display: isOpen ? "inline-block" : "none" }}>Home</span>
               </Link>
            </li>
            <li>
               <Link to="/Allgames">
                  <GiRetroController fontSize="30px" />
                  <span style={{ display: isOpen ? "inline-block" : "none" }}>All Game</span>
               </Link>
            </li>
            <li>
               <Link to="/AddedPage">
                  <TiPlusOutline fontSize="30px" />
                  <span style={{ display: isOpen ? "inline-block" : "none" }}>Recently Added</span>
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;