import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch 
  } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';


function App() {
  return (
    
    <Router>
      <Fragment>
        <Navbar />
          <section>
                <Route exact path='/' component={Landing} />
                <Switch>
                    <Route path='/products' component={Products} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </section>
      </Fragment>
    </Router>
  );
}

export default App;
