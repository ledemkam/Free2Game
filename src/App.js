import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './Hook';
// import { GlobalStyles } from './global';
import { Burger, Menu } from './components';
//import Home from './components/Home';
import './App.css';
import Test2 from './components/Test2';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import Header from './components/Header'
//import Details from './components/Details';
//import Allgames from './components/Allgames';

function App() {
   const [open, setOpen] = useState(false);
   const node = useRef();
   const menuId = 'main-menu';

   useOnClickOutside(node, () => setOpen(false));

   return (
      <>
         <Router>
            {/* <GlobalStyles /> */}
            <div>
               <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
               <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <Switch>
               <Route path="/" component={Test2} exact />
            </Switch>
         </Router>
      </>
   );
}

export default App;
