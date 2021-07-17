import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch 
  } from 'react-router-dom';
import Landing from './components/layout/Landing';
import ProductPage from './components/Products/ProductPage';
import store from './store';
import { Provider } from 'react-redux';
import Cart from './components/Cart/Cart';
import  AdminPage  from './Admin/AdminPage';
import AdminProducts from './Admin/AdminProducts';
import AdminOrders from './Admin/AdminOrders';
import AdminFormProducts from './Admin/AdminFormProducts';

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
                    <Route path='/admin' component={AdminPage} />
                    <Route path='/adminproducts' component={AdminProducts}/>
                    <Route path='/adminorders' component={AdminOrders}/>
                    <Route path='/admin-form' component={AdminFormProducts} />
                </Switch>
            </section>
      </Fragment>
    </Router>
    </Provider>

  );
}

export default App;
