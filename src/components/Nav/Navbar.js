import { VscHome } from 'react-icons/vsc';
import { GiRetroController } from 'react-icons/gi';
import { TiPlusOutline } from 'react-icons/ti';
import "../../css/Navigation.css"

import {
   Link
} from "react-router-dom";

// align - items: flex - end;

const Navbar = () => {
   // const [open, setOpen] = useState(false);
   return (
      <nav>
         <div className="burgerMenu">
            <div />
            <div />
            <div />
         </div>
         <ul>
            <li>
               <Link to="/"><VscHome fontSize="30px" />Home</Link>
            </li>
            <li>
               <Link to="/Allgames"><GiRetroController fontSize="30px" />All Game</Link>
            </li>
            <li>
               <Link to="/AddedPage"><TiPlusOutline fontSize="30px" />Recently Added</Link>
            </li>
         </ul>

      </nav>
   );
};

export default Navbar;
