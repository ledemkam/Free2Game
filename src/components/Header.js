import '../css/Header.css';

const Header = () => {
    return (
        <div className="logo">
            <img className="logo" src="./img/logo.png" alt="" />
            <input className="searchfield" type="text" /> <img className="searchicon" src="./img/search.png" alt="" />
        </div>
    );
}

export default Header;