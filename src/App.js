import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router
  //  Route, Switch 
  } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
          <section>
                <Landing />
            </section>
      </Fragment>
    </Router>
  );
}

export default App;
