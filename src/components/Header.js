import '../css/Header.css';

//import Header from './Header';

const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src="./img/logo.png" alt="" />
                <input className="searchfield" type="text" />{' '}
                <button><img className="searchicon" src="./img/search.png" alt="" /></button>
            </div>
        </>
    );
};

export default Header;
