import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch 
  } from 'react-router-dom';
import Landing from './components/layout/Landing';
import ProductPage from './components/Products/ProductPage';
import store from './store';
import { Provider } from 'react-redux';
import Cart from './components/Cart/Cart';

function App() {
  return (
    
    <Provider store={store}>   
       <Router>
      <Fragment>
          <section>
                <Route exact path='/' component={Landing} />
                <Switch>
                    <Route path='/products' component={ProductPage} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </section>
      </Fragment>
    </Router>
    </Provider>

  );
}

export default App;
