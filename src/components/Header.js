import '../Header/Header.css';
//import Header from './Header';

const Header = () => {
   return (
      <div className="header">
         <img className="logo" src="./img/logo.png" alt="" />
         <input className="searchfield" type="text" />{' '}
         <img className="searchicon" src="./img/search.png" alt="" />
      </div>
   );
};

export default Header;
