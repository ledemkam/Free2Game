import '../css/Header.css';

//import Header from './Header';

const Header = () => {
    return (
        <>
            <div className="header">
                <div><img className="logo" src="./img/logo.png" alt="" /></div>
                <form action="">
                    <input className="searchfield" type="text" />
                    <button><img className="searchicon" src="./img/search.png" alt="" /></button>
                </form>
            </div>
        </>
    );
};

export default Header;