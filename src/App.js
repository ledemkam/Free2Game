import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import './App.css';
//import Test2 from './components/Test2';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
//import Details from './components/Details';
import Allgames from './components/Allgames';
import AddedPage from "./components/AddedPage"

function App() {
   return (
      <>
         <Router>
            <div>
               <Header />
               <Navbar />
            </div>
            <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/Allgames" component={Allgames} exact />
               <Route path="/AddedPage" component={AddedPage} exact />
            </Switch>
         </Router>
      </>
   );
}

export default App;
