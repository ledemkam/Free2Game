import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import './App.css';
import Test2 from './components/Test2';
import DetailsDyn from './components/DetailsDyn';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Details from './components/Details';
import Allgames from './components/Allgames';
import AddedPage from "./components/AddedPage"

function App() {
  // const menuId = 'main-menu';

  return (
    // <>
    //   <Router>
    //     {/* <GlobalStyles /> */}
    //     <div>
    //       <Header />
    //       {/* <Navbar /> */}
    //     </div>
    //     <Switch>
    //       <Route path="/" component={Home} exact />
    //       <Route path="/Allgames" component={Allgames} exact />
    //       <Route path="/AddedPage" component={AddedPage} exact />
    //       <Route path="/" component={Test2} exact />
    //       <Route path="/api/:myId" component={DetailsDyn} />
    //     </Switch>
    //   </Router>
    // </>
    <Allgames />
  );
}

export default App;
