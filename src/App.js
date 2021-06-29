import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import DetailsDyn from './components/DetailsDyn';
import Header from './components/Header';
import Details from './components/Details';
import Allgames from './components/Allgames';
import AddedPage from "./components/AddedPage"


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Navbar />
        </div>
        <Switch>
          <Route path="/Allgames" component={Allgames} />
          <Route path="/AddedPage" component={AddedPage} />
          <Route path="/api/:myId" component={DetailsDyn} />
          <Route path="Details" component={Details} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
